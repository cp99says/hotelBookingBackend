const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const reg = require("./register/register");
const rooms = require("./register/register_room");
mongoose.connect(
  process.env.mongoURI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db");
  }
);

app.use(express.json());
app.use(cors());
app.use("*", cors());
app.get("/", (req, res) => {
  res.send("all good");
});
//       register and get data of all rooms
app.use("/reg", reg);
//       register and get data of available room hotel wise
app.use("/data", rooms);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
