<<<<<<< HEAD
if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
const express = require("express");
const app = express();
const methodoverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser=require("cookie-parser");
const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const session=require("express-session");
const mongourl = "mongodb://127.0.0.1:27017/wanderlust";
const ejsmate = require("ejs-mate");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const user=require("./models/user.js");




const userRouter=require("./routes/user.js");
const categoryRouter=require("./routes/category.js");


const ExpressError = require("./utils/ExpressError.js");


async function main() {
    await mongoose.connect(mongourl);
}

main()
    .then((res) => { console.log("DATABASE CONNECTED SUCCESSFULLY") })
    .catch((err) => { console.log("There is something err " + err) });

app.use(cookieParser("secretcode"));
app.use(session({
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
       expires:Date.now()+7*24*60*60*1000,
       maxAge: 7*24*60*60*1000,
       httpOnly:true,
    },
}))

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.engine("ejs", ejsmate);




//MIDDLEWARE DATA-VALIDATION OF SINGLE TYPE
// const validateListing = (req, res, next) => {
//     // let result=listingSchema.validate(req.body);
//     // if(result.error)
//     let { error } = listingSchema.validate(req.body);

//     if (error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, error);
//         // throw new ExpressError(400,errMsg);
//     }
//     else {
//         next();
//     }
// }



app.get("/getcookie",(req,res)=>{
    res.cookie("greet","Nameste India");
    res.cookie("origin","Gujarat");
    res.send("we sent you a cookie.");
})
app.get("/signedcookie",(req,res)=>{
    res.cookie("made-in","india",{signed:true});
    res.send("signed cookie done");
})
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
})
app.get("/admin",(req,res)=>{
    console.dir(req.cookies);
    res.send("hii i am a admin.")
})
app.get("/greet",(req,res)=>{
    let {name="anonymus"}=req.cookies;
    res.send(`hii, ${name}`);
})
app.get("/greet1",(req,res)=>{
    res.send(`hii i am a greet 1`);
})




app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.curruser=req.user;    
    next();
})

app.get("/demouser",async(req,res)=>{
     let fakeuser=new user({
        email:"student@gmail.com",
        username:"krish-vadadoriya"
     });
    let registereduser= await user.register(fakeuser,"helloworld");
    res.send(registereduser);

});


app.use("/category",categoryRouter);
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

//reviews
//post route
// app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//     let newreview = new review(req.body.review);
//     listing.reviews.push(newreview);
//     await newreview.save();
//     await listing.save();
//     console.log("new review saved");
//     res.redirect(`/listings/${listing._id}`);
// }));

//file in listing.js

// app.get("/", (req, res) => {
//     res.send("hii i am a root.");
// })

//new route
// app.get("/listings/new", (req, res) => {
//     res.render("./listings/new.ejs");
// })
//

//index route
// app.get("/listings", wrapAsync(async (req, res) => {
//     const alllistings = await Listing.find({});
//     res.render("./listings/index.ejs", { alllistings })
// }));


//file in listing.js
//show route
// app.get("/listings/:id", wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//         let newrev = [];
//         let i = 0;
//         for (let review1 of listing.reviews) {
//             newrev[i] = await review.findById(review1);
//             console.log(newrev[i]);
//             i++;
//         }
//     res.render("./listings/show.ejs", { listing, newrev });
// }));


//create route
// app.post("/listings", validateListing, wrapAsync(async (req, res, next) => {
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
//     await newListing.save();
//     res.redirect("/listings");
// }));


//edit route
// app.get("/listings/:id/edit", wrapAsync(async (req, res, name) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("./listings/edit.ejs", { listing });

// }));
// //update route
// app.put("/listings/:id", validateListing, wrapAsync(async (req, res, next) => {
//     // if (!req.body.listing) {
//     //     next(new ExpressError(400, "send valid data."));
//     // }

//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     res.redirect("/listings");
// }));

//delete review
// app.delete("/listings/:id/reviews/:reviewid",
//     wrapAsync(async (req, res) => {
//         let { id ,reviewid} = req.params;
//         await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}})
//         await review.findByIdAndDelete(reviewid);
//         res.redirect(`/listings/${id}`);
//     }));

//delete route
// app.delete("/listings/:id", wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);

//     console.log(deletedListing);
//     res.redirect("/listings");

// }));

// we can also use app.use
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    // if (err.name == "ValidationError") {
    //     res.status(401).send("This is a ValidationError. Please Enter from and to field");
    // }
    // else if (err.name == "CastError") {
    //     res.status(403).send("This is cast error. Please Enter valid id");
    // }
    // else {
    let { statusCode = 500, message = "SOME ERROR IS GENERATED." } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", { err });
    // }

})

app.listen(8080, (req, res) => {
    console.log("web is listed.");
=======
if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
const express = require("express");
const app = express();
const methodoverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser=require("cookie-parser");
const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const session=require("express-session");
const mongourl = "mongodb://127.0.0.1:27017/wanderlust";
const ejsmate = require("ejs-mate");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const user=require("./models/user.js");




const userRouter=require("./routes/user.js");
const categoryRouter=require("./routes/category.js");


const ExpressError = require("./utils/ExpressError.js");


async function main() {
    await mongoose.connect(mongourl);
}

main()
    .then((res) => { console.log("DATABASE CONNECTED SUCCESSFULLY") })
    .catch((err) => { console.log("There is something err " + err) });

app.use(cookieParser("secretcode"));
app.use(session({
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
       expires:Date.now()+7*24*60*60*1000,
       maxAge: 7*24*60*60*1000,
       httpOnly:true,
    },
}))

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.engine("ejs", ejsmate);




//MIDDLEWARE DATA-VALIDATION OF SINGLE TYPE
// const validateListing = (req, res, next) => {
//     // let result=listingSchema.validate(req.body);
//     // if(result.error)
//     let { error } = listingSchema.validate(req.body);

//     if (error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, error);
//         // throw new ExpressError(400,errMsg);
//     }
//     else {
//         next();
//     }
// }



app.get("/getcookie",(req,res)=>{
    res.cookie("greet","Nameste India");
    res.cookie("origin","Gujarat");
    res.send("we sent you a cookie.");
})
app.get("/signedcookie",(req,res)=>{
    res.cookie("made-in","india",{signed:true});
    res.send("signed cookie done");
})
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
})
app.get("/admin",(req,res)=>{
    console.dir(req.cookies);
    res.send("hii i am a admin.")
})
app.get("/greet",(req,res)=>{
    let {name="anonymus"}=req.cookies;
    res.send(`hii, ${name}`);
})
app.get("/greet1",(req,res)=>{
    res.send(`hii i am a greet 1`);
})




app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.curruser=req.user;    
    next();
})

app.get("/demouser",async(req,res)=>{
     let fakeuser=new user({
        email:"student@gmail.com",
        username:"krish-vadadoriya"
     });
    let registereduser= await user.register(fakeuser,"helloworld");
    res.send(registereduser);

});


app.use("/category",categoryRouter);
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

//reviews
//post route
// app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//     let newreview = new review(req.body.review);
//     listing.reviews.push(newreview);
//     await newreview.save();
//     await listing.save();
//     console.log("new review saved");
//     res.redirect(`/listings/${listing._id}`);
// }));

//file in listing.js

// app.get("/", (req, res) => {
//     res.send("hii i am a root.");
// })

//new route
// app.get("/listings/new", (req, res) => {
//     res.render("./listings/new.ejs");
// })
//

//index route
// app.get("/listings", wrapAsync(async (req, res) => {
//     const alllistings = await Listing.find({});
//     res.render("./listings/index.ejs", { alllistings })
// }));


//file in listing.js
//show route
// app.get("/listings/:id", wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let listing = await Listing.findById(id);
//         let newrev = [];
//         let i = 0;
//         for (let review1 of listing.reviews) {
//             newrev[i] = await review.findById(review1);
//             console.log(newrev[i]);
//             i++;
//         }
//     res.render("./listings/show.ejs", { listing, newrev });
// }));


//create route
// app.post("/listings", validateListing, wrapAsync(async (req, res, next) => {
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
//     await newListing.save();
//     res.redirect("/listings");
// }));


//edit route
// app.get("/listings/:id/edit", wrapAsync(async (req, res, name) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("./listings/edit.ejs", { listing });

// }));
// //update route
// app.put("/listings/:id", validateListing, wrapAsync(async (req, res, next) => {
//     // if (!req.body.listing) {
//     //     next(new ExpressError(400, "send valid data."));
//     // }

//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     res.redirect("/listings");
// }));

//delete review
// app.delete("/listings/:id/reviews/:reviewid",
//     wrapAsync(async (req, res) => {
//         let { id ,reviewid} = req.params;
//         await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}})
//         await review.findByIdAndDelete(reviewid);
//         res.redirect(`/listings/${id}`);
//     }));

//delete route
// app.delete("/listings/:id", wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);

//     console.log(deletedListing);
//     res.redirect("/listings");

// }));

// we can also use app.use
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    // if (err.name == "ValidationError") {
    //     res.status(401).send("This is a ValidationError. Please Enter from and to field");
    // }
    // else if (err.name == "CastError") {
    //     res.status(403).send("This is cast error. Please Enter valid id");
    // }
    // else {
    let { statusCode = 500, message = "SOME ERROR IS GENERATED." } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", { err });
    // }

})

app.listen(8080, (req, res) => {
    console.log("web is listed.");
>>>>>>> d158775 (Added my project folder)
})