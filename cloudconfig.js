<<<<<<< HEAD
const cloudinary=require("cloudinary").v2;
const { CloudinaryStorage }=require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
       folder: 'wanderlust_DEV',
       allowerdFormats:["png","jpg","jpeg","pdf"], // supports promises as well
    },
  });

module.exports={
    cloudinary,
    storage,
=======
const cloudinary=require("cloudinary").v2;
const { CloudinaryStorage }=require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
       folder: 'wanderlust_DEV',
       allowerdFormats:["png","jpg","jpeg","pdf"], // supports promises as well
    },
  });

module.exports={
    cloudinary,
    storage,
>>>>>>> d158775 (Added my project folder)
}