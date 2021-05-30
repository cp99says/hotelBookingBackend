const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
  //   user_name: {
  //     type: String,
  //     required: true,
  //   },
  //   user_email: {
  //     type: String,
  //     required: true,
  //   },
  //   hotel_name: {
  //     type: String,
  //     required: true,
  //   },
  //   hotel_id: {
  //     type: String,
  //     required: true,
  //   },
  rooms_booked: [
    {
      roomType: {
        type: String,
        required: true,
        enum: ["Deluxe", "Super Deluxe", "Presidential Suite"],
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  bookedAt: {
    type: String,
    required: true,
  },
});
