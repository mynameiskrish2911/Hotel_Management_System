
const express=require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router({ mergeParams: true });
const Listing=require("../models/listing");
const {isLoggedin}=require("../middleware");


router.get("/rooms",isLoggedin,wrapAsync(async(req,res)=>{
    const alllistings = await Listing.find({});
    const ans="rooms";
     res.render("./category/response.ejs",{alllistings,ans});
}));


router.get("/iconiccities",isLoggedin,wrapAsync(async(req,res)=>{
    const alllistings = await Listing.find({});
    const ans="iconiccities";
    res.render("./category/response.ejs",{alllistings,ans});
}));



router.get("/mountains",isLoggedin,wrapAsync(async(req,res)=>{
    const alllistings = await Listing.find({});
    const ans="mountains";
    res.render("./category/response.ejs",{alllistings,ans});
}));


router.get("/castle",isLoggedin,wrapAsync(async(req,res)=>{
    const alllistings = await Listing.find({});
    const ans="castle";
     res.render("./category/response.ejs",{alllistings,ans});
}));


router.get("/arcticpools",isLoggedin,wrapAsync(async(req,res)=>{
    const alllistings = await Listing.find({});
    const ans="arcticpools";
    res.render("./category/response.ejs",{alllistings,ans});
}));

router.get("/farms",isLoggedin,wrapAsync(async(req,res)=>{
    const alllistings = await Listing.find({});
    const ans="farms";
    res.render("./category/response.ejs",{alllistings,ans});
}));

router.get("/amazingpools",isLoggedin,wrapAsync(async(req,res)=>{
    const alllistings = await Listing.find({});
    const ans="amazingpools";
    res.render("./category/response.ejs",{alllistings,ans});
}));


router.get("/camping",isLoggedin,wrapAsync(async(req,res)=>{
    const alllistings = await Listing.find({});
    const ans="camping";
     res.render("./category/response.ejs",{alllistings,ans});
}));
module.exports=router;