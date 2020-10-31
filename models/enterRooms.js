const mongoose = require("mongoose");
const roomsType = ["DELUXE", "SUPER DELUXE", "ULTRA DELUXE"];

const roomSchema = mongoose.Schema({
  roomType: {
    type: String,
    rquired: true,
    enum: roomsType,
  },
  roomsQty: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Rooms Database", roomSchema);
