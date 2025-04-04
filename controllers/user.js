const Listing=require("../models/listing");
const user=require("../models/user");
const review=require("../models/review");


module.exports.rendersignupform=(req,res)=>{
    res.render("./users/signup.ejs");
}

module.exports.createuser=async(req,res)=>{
    try{
        let{username:name,password,email:mail}=req.body;
        const newuser=new user({
            email:mail,
            username:name,
           });
        const registereduser=await user.register(newuser,password);
        req.login((registereduser),(err)=>{
            if(err){
               return next(err); 
            }
            
            req.flash("success","New User Registered.");
            res.redirect("/listings");
        })  
    }
    catch(e){
        req.flash("error","Please enter a unique username");
        res.redirect("/signup");
    }
    
}

module.exports.renderloginform=(req,res)=>{
    res.render("./users/login.ejs");
};

module.exports.login=async(req,res)=>{
    req.flash("success","welcome to wanderlust you are log in");
    if(res.locals.redirecturl){
       res.redirect(res.locals.redirecturl);
    }
    else{
      res.redirect("/listings");
   }
};


module.exports.logout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","you are logged out now");
        res.redirect("/listings");
    })
};