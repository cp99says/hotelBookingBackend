const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  name: {
    type: String,
  },
  place: {
    location: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  famous: {
    reviews: [String],
    rating: {
      type: Number,
    },
  },
  imageName: {
    type: String,
  },
  info: {
    type: String,
  },
  facilities: {
    type: String,
  },
  hotel_type: {
    type: String,
    enum: ["villa", "cottage", "apartment", "ashram", "resort"],
  },
  dateOfRegister: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Hotels_Data", hotelSchema);
