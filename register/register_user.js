const express = require("express");
const app = express();
const user = require("./../model/user");
const multer = require("multer");
require("dotenv/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/user/");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
var upload = multer({ storage: multerStorage });
var uploadFile = upload.any("image");

app.post("/register", uploadFile, async (req, res) => {
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const image_name = req.files[0].originalname;
  //res.send(req.files);
  const a = new user({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    contact_number: req.body.contact_number,
    image: image_name,
    password: hashedPassword,
  });

  const data = await a.save();
  res.status(201).json({
    message: "success",
    data,
  });
});

app.get("/userData", async (req, res) => {
  const a = await user.find();
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

app.post("/login", async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).json({
      status: "failure",
      message: "please enter email and password",
    });

  try {
    const a = await user.findOne({ email: req.body.email });

    if (a == null)
      return res.status(404).json({
        status: "failure",
        message: "email not found",
      });

    const validPassword = await bcrypt.compare(req.body.password, a.password);
    if (validPassword === false)
      return res.status(403).json({
        status: "failure",
        message: "invalid password",
      });

    const token = jwt.sign(
      {
        _id: a._id,
        name: a.name,
        username: a.username,
        email: a.email,
      },
      process.env.tokenSecret
    );
    res.json({ token: token });

    //res.header("auth-token", token).json(token)
  } catch (err) {
    res.send(err);
  }
});

module.exports = app;
