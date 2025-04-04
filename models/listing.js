const mongoose = require("mongoose");
const review = require("./review.js");
const { required } = require("joi");
const Schema = mongoose.Schema;


let listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      refer: 'review',
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    refer: 'user',
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  category:{
    type:String,
    enum:["rooms","iconiccities","mountains","castle","amazingpools","camping","farms","arcticpools"],
    required:true,
  }


});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await review.deleteMany({ _id: { $in: listing.reviews } });
  }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


