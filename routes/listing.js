const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const review = require("../models/review.js");
const user = require("../models/user.js");
const { isLoggedin, isOwener } = require("../middleware.js");
const multer=require('multer');

const {storage}=require("../cloudconfig.js");

const upload=multer({storage});

//const upload=multer({ dest:"uploads/" });




const listingController = require("../controllers/listings.js");











//MIDDLEWARE DATA-VALIDATION OF SINGLE TYPE
const validateListing = (req, res, next) => {
    // let result=listingSchema.validate(req.body);
    // if(result.error)
    let { error } = listingSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, error);
        // throw new ExpressError(400,errMsg);
    }
    else {
        next();
    }
}


// we can also write route in this form whose route is same
// router
//     .route("/")
//     .get( wrapAsync(listingController.index))
//     .post( isLoggedin, validateListing, wrapAsync(listingController.createlisting));


//new route
router.get("/new", isLoggedin, listingController.renderNewForm)

// router.get("/new", isLoggedin,(req, res) => {
//     res.render("./listings/new.ejs");
// })

//index route
router.get("/", wrapAsync(listingController.index));

// router.get("/", wrapAsync( async (req, res) => {
//     const alllistings = await Listing.find({});
//     res.render("./listings/index.ejs", { alllistings })
// }));



//show route
router.get("/:id", wrapAsync(listingController.showlisting));

// router.get("/:id", wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//     if(!listing){
//         req.flash("error","Listing which you searched does not found.");
//         res.redirect("/listings");
//     }
//         let newrev = [];
//         let authorname=[];
//         let i = 0;
//         for (let review1 of listing.reviews) {
//             newrev[i] = await review.findById(review1);
//             authorname[i]= await user.findById(newrev[i].author);
//             i++;
//         }
//         let newuser=await user.findById(listing.owner);

//     res.render("./listings/show.ejs", { listing, newrev,authorname ,newuser});
// }));


//create listing
  router.post("/", isLoggedin,upload.single('listing[image]'), validateListing, wrapAsync(listingController.createlisting));
// router.post("/", upload.single('listing[image]'),(req,res)=>{
//     res.send(req.file);
// });
// router.post("/", isLoggedin,validateListing, wrapAsync(async (req, res, next) => {

//     //  if(!req.body.listing){
//     //     next(new ExpressError(400,"send valid data."));
//     //  }  
//     //  const newListing = new Listing(req.body.listing);
//     //  if(!newListing.description){
//     //     next(new ExpressError(400,"Description is missing."));
//     //  }
//     //  else if(!newListing.title){
//     //     next(new ExpressError(400,"title is missing."));
//     //  }
//     //  else if(!newListing.price){
//     //     next(new ExpressError(400,"price is missing."));
//     //  }
//     //  else if(!newListing.location){
//     //     next(new ExpressError(400,"Location is missing."));
//     //  }
//     //  else if(!newListing.country){
//     //     next(new ExpressError(400,"country is missing."));
//     //  }

//     // ANOTHER TYPE OF HANDLING ERROR THROUGH JOI-SCHEMA
//     // let result = listingSchema.validate(req.body);
//     // console.log(result);
//     // if(result.error) {
//     //     throw new ExpressError(400, result.error);
//     // }

//     const newListing = new Listing(req.body.listing);
//     newListing.owner=req.user._id;
//     await newListing.save();

//     req.flash("success","New Listing Created!");
//     res.redirect("/listings");
// }));


//edit route
router.get("/:id/edit", isLoggedin, isOwener, wrapAsync(listingController.rendereditfile));

// router.get("/:id/edit", isLoggedin, isOwener ,wrapAsync(async (req, res, name) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("./listings/edit.ejs", { listing });
// }));




//update route
router.put("/:id", isLoggedin, isOwener,upload.single('listing[image]') ,validateListing, wrapAsync(listingController.changeupdates));

// router.put("/:id", isLoggedin,isOwener,validateListing, wrapAsync(async (req, res, next) => {
//     // if (!req.body.listing) {
//     //     next(new ExpressError(400, "send valid data."));
//     // }
//     let { id } = req.params;
//     // let listing=await Listing.findById(id);
//     // if(res.locals.curruser&&!listing.owner.equals(res.locals.curruser._id)){
//     //      req.flash("error","you don't have permission to edit");
//     //       return res.redirect(`/listings/${id}`);
//     // }
//         await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//         req.flash("success","Listing is Upadted.");
//         res.redirect("/listings");  
// }));


//delete route
router.delete("/:id", isLoggedin, isOwener, wrapAsync(listingController.deletelisting));

// router.delete("/:id",isLoggedin , isOwener, wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     // let listing=await Listing.findById(id);
//     // if(res.locals.curruser&&!listing.owner.equals(res.locals.curruser._id)){
//     //      req.flash("error","you don't have permission to edit");
//     //      return res.redirect(`/listings/${id}`);
//     // }
//         let deletedListing = await Listing.findByIdAndDelete(id);
//         console.log(deletedListing);
//         req.flash("success","Listing Delete.");
//         res.redirect("/listings");



// }));



module.exports = router;
