const express = require("express");
const app = express();
const room = require("./../model/hotel_room");
app.post("/enterRoom", async (req, res) => {
  try {
    const data = new room({
      hotelName: req.body.hotel_name,
      hotelId: req.body.hotel_id,
      roomsAvailable: req.body.rooms_available,
    });
    const rooms = await data.save();
    res.status(201).json(rooms);
  } catch (err) {
    res.send(err);
  }
});
module.exports = app;
