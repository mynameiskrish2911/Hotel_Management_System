const Listing=require("./models/listing");
const review=require("./models/review");

module.exports.isLoggedin=(req,res,next)=>{
    // console.log(req.path,"..",req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirecturl=req.originalUrl;
        console.log(req.originalUrl);
        req.flash("error","you must be logged in!");
        return res.redirect("/login"); 
    }
    next();
};


module.exports.saveredirecturl=(req,res,next)=>{
    
    if(req.session.redirecturl){
         res.locals.redirecturl=req.session.redirecturl;   
    }
    next();
}

module.exports.isOwener=async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner.equals(res.locals.curruser._id)){
       
         req.flash("error","you are not the owner of listings");
         return res.redirect(`/listings/${id}`);
    }
    next();
};


module.exports.revOwener=async(req,res,next)=>{
    let {id,reviewid}=req.params;
    let rev=await review.findById(reviewid);
    if(!rev.author.equals(res.locals.curruser._id)){
        req.flash("error","you are not the author of review");
        return res.redirect(`/listings/${id}`);
   }
    next();
};