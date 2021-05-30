const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    location: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  famous: {
    reviews: [{
      type: String,
    }],
    rating: [{
      type: Number,
      min:0,
      max:5
    }]
  },
  imageName: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  facilities: [
    {
      type: String,
      required: true,
    },
  ],
  hotel_type: {
    type: String,
    enum: ["villa", "cottage", "apartment", "ashram", "resort"],
    required: true,
  },
  dateOfRegister: {
    type: String,
  },
});

module.exports = mongoose.model("Hotels_Data", hotelSchema);
