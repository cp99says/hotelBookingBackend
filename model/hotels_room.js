const mongoose = require("mongoose");

const schema = mongoose.Schema({
  hotel_name: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
    enum: ["deluxe", "super-deluxe", "presidential suite"],
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Hotel Rooms Tariff", schema);
