const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const reg = require("./register/register_hotel");
const rooms = require("./register/register_room");
const user = require("./register/register_user");
const book = require("./routes/room_booking");

mongoose.connect(
  process.env.mongoURILocal,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db");
  }
);
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("*", cors());
app.get("/", (req, res) => {
  res.send("all good, AWS is up");
});
//       register and get data of all rooms
app.use("/reg", reg);
//       register and get data of available room hotel wise
app.use("/data", rooms);
//       register the data of customers who book the hotel
app.use("/user", user);
//      to book rooms in their desired hotel
app.use("/room", book);
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
