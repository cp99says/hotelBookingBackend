const express = require("express");
const app = express();
const roomSchema = require("./../model/hotels_room");
const { request } = require("./register_hotel");

app.post("/hotel_rooms", async (req, res) => {
  const a = new roomSchema({
    name: req.body.name,
    room: {
      type: req.body.room.type,
      number: req.body.room.number,
      price: req.body.room.price,
    },
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

app.put("/hotel_rooms", async (req, res) => {
  var name = req.body.name;
  var roomType = req.body.roomType;
  var roomPrice = req.body.roomPrice;
  var number = req.body.roomNumber;
  // };
  try {
    const data = await roomSchema.update(
      { name: name },
      {
        $push: {
          room: {
            type: roomType,
            price: roomPrice,
            number: number,
          },
        },
      },
      { upsert: true }
    );
    res.send(data);
    // res.status(201).json({
    //   status: "success",
    //   data,
    // });
  } catch (err) {
    res.json(err);
  }
});

app.get("/hotel_rooms", async (req, res) => {
  const a = await roomSchema.find();
  try {
    res.status(200).json({
      status: "success",
      data: a,
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
