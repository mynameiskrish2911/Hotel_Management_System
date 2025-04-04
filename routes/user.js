const express=require("express");
const router=express.Router({mergeParams:true});
const user=require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
const { saveredirecturl } = require("../middleware.js");
const userController=require("../controllers/user.js");



//get signup route
router.get("/signup",userController.rendersignupform);
// router.get("/signup",(req,res)=>{
//     res.render("./users/signup.ejs");
// });




//create new user route
router.post("/signup",wrapAsync(userController.createuser));

// router.post("/signup",wrapAsync(async(req,res)=>{
//     try{
//         let{username:name,password,email:mail}=req.body;
//         const newuser=new user({
//             email:mail,
//             username:name,
//            });
//         const registereduser=await user.register(newuser,password);
//         req.login((registereduser),(err)=>{
//             if(err){
//                return next(err); 
//             }
//             req.flash("success","New User Registered.");
//             res.redirect("/listings");
//         })    
//     }
//     catch(e){
//         req.flash("error","Please enter a unique username");
//         res.redirect("/signup");
//     }   
// }));




//login form route
router.get("/login",userController.renderloginform);
// router.get("/login",(req,res)=>{
//     res.render("./users/login.ejs");
// });


//login process route
router.post("/login", saveredirecturl,
    passport.authenticate("local",{
        failureRedirect:"/login",
        failureFlash:true
    }),
    userController.login
    );
// router.post("/login",
//     saveredirecturl,
//     passport.authenticate("local",{
//         failureRedirect:"/login",
//         failureFlash:true
//     }),
//     async(req,res)=>{
//       req.flash("success","welcome to wanderlust you are log in");
       
//       if(res.locals.redirecturl){
//          res.redirect(res.locals.redirecturl);
//       }
//       else{
//         res.redirect("/listings");
//      }
// });



router.get("/logout",userController.logout)
// router.get("/logout",(req,res,next)=>{
//     req.logOut((err)=>{
//         if(err){
//            return next(err);
//         }
//         req.flash("success","you are logged out now");
//         res.redirect("/listings");
//     })
// })

module.exports=router;