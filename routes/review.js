const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const review = require("../models/review.js");
const Listing = require("../models/listing.js");
const user=require("../models/user.js");
const {  reviewSchema } = require("../schema.js");
const {isLoggedin,revOwener}=require("../middleware.js");


const reviewController=require("../controllers/reviews.js");


const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {

        let errMsg = error.details.map((el) => el.message).join(",");
        // throw new ExpressError(400,error);
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}


//reviews
//post route
router.post("/", isLoggedin,validateReview, wrapAsync(reviewController.createreciew));

// router.post("/", isLoggedin,validateReview, wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//     let newreview = new review(req.body.review);
//     newreview.author=req.user._id;
//     listing.reviews.push(newreview);
//     await newreview.save();
//     await listing.save();
//     req.flash("success","New Review Created.");
//     res.redirect(`/listings/${listing._id}`);
// }));





//delete review
router.delete("/:reviewid",isLoggedin,revOwener,
    wrapAsync(reviewController.deletereview));

// router.delete("/:reviewid",isLoggedin,revOwener,
//     wrapAsync(async (req, res) => {
//         let { id ,reviewid} = req.params;
//         await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}})
//         await review.findByIdAndDelete(reviewid);
//         req.flash("success","Review Deleted.");
//         res.redirect(`/listings/${id}`);
//     }
// ));



module.exports=router;