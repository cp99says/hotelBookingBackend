const mongoose = require("mongoose");
const roomSchema = mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  hotelId: {
    type: String,
    required: true,
  },
  roomsAvailable: [
    {
      roomType: {
        type: String,
        required: true,
        enum: ["Deluxe", "Super Deluxe", "Presidential Suite"],
      },

      quantityAvailable: {
        type: Number,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Hotel Rooms", roomSchema);
