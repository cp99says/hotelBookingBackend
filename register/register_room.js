const express = require("express");
const app = express();
const roomSchema = require("./../model/hotels_room");
const { request } = require("./register");

app.post("/hotel_rooms", async (req, res) => {
  const a = new roomSchema({
    hotel_name: req.body.hotel_name,
    roomType: req.body.roomType,
    roomNumber: req.body.roomNumber,
    pricePerNight: req.body.pricePerNight,
  });

  try {
    const data = await a.save();
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.json(err);
  }
});

app.post("/hotel_rooms1", async (req, res) => {
  var id = req.body.id;
  var obj = {
    roomType: req.body.roomType,
    roomNumber: req.body.roomNumber,
    pricePerNight: req.body.pricePerNight,
  };
  //var a = roomSchema.$push(obj);

  try {
    const data = await roomSchema.findOneAndUpdate(
      { '_id': id },
      {
        $push: {
          roomType: 'super-deluxe',
          roomNumber: '200',
          pricePerNight: '1000',
        },
      }
    );
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.json(err);
  }
});

app.get("/hotel_rooms", async (req, res) => {
  const a = await roomSchema.find();
  try {
    res.status(200).json({
      status: "success",
      hotels_registered: a.length,
      data: a,
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
