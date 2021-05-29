const express = require("express");
const app = express();
const moment = require("moment");
const hotelss = require("../model/hotels");
const multer = require("multer");
var multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/hotel/");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
var upload = multer({ storage: multerStorage });
var uploadFile = upload.any("file");

app.post("/hotel", uploadFile, async (req, res) => {
  //console.log("hello");
  const original_name = req.files[0].originalname;
  const schema = new hotelss({
    name: req.body.name,
    address: {
      location: req.body.address.location,
      city: req.body.address.city,
      state: req.body.address.state,
    },
    imageName: original_name,
    info: req.body.info,
    facilities: req.body.facilities,
    hotel_type: req.body.hotel_type,
    dateOfRegister: moment()
      .utcOffset("+05:30")
      .format("MMMM Do YYYY, h:mm:ss a"),
  });
  //res.send(schema);
  try {
    const a = await schema.save();
    res.status(201).json({
      status: "success",
      data: a,
    });
  } catch (err) {
    res.json(err);
  }
});

app.get("/hotel", async (req, res) => {
  const a = await hotelss.find();
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
