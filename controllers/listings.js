const Listing = require("../models/listing");
const user = require("../models/user");
const review = require("../models/review");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("./listings/index.ejs", { alllistings })
}

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
}

module.exports.showlisting = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing which you searched does not found.");
        res.redirect("/listings");
    }
    let newrev = [];
    let authorname = [];
    let i = 0;
    for (let review1 of listing.reviews) {
        newrev[i] = await review.findById(review1);
        authorname[i] = await user.findById(newrev[i].author);
        i++;
    }
    let newuser = await user.findById(listing.owner);

    res.render("./listings/show.ejs", { listing, newrev, authorname, newuser });
}

module.exports.createlisting = async (req, res, next) => {
   let response=await  geocodingClient
   .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
    .send()
      
       
    // console.log(req.body.listing);
    // res.send("Done");
    let url = req.file.path;
    let filename = req.file.filename;
    
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;
    let saved=await newListing.save();
    console.log(saved);

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}

module.exports.rendereditfile = async (req, res, name) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
}

module.exports.changeupdates = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  
    let response=await  geocodingClient
   .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
    .send()
    listing.geometry = response.body.features[0].geometry;
    await listing.save();
    console.dir(req.body);
    if (typeof (req.file) !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing is Upadted.");
    res.redirect(`/listings/${id}`);

}

module.exports.deletelisting = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Delete.");
    res.redirect("/listings");
}