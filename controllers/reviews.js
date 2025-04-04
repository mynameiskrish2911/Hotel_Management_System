const Listing=require("../models/listing");
const user=require("../models/user");
const review=require("../models/review");

module.exports.createreciew=async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let newreview = new review(req.body.review);
    newreview.author=req.user._id;
   
    listing.reviews.push(newreview);

    await newreview.save();
    await listing.save();
   
    req.flash("success","New Review Created.");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.deletereview=async (req, res) => {
    let { id ,reviewid} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}})
    await review.findByIdAndDelete(reviewid);
    req.flash("success","Review Deleted.");
    res.redirect(`/listings/${id}`);
}