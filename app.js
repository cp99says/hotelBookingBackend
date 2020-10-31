const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
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

app.use(cors());
app.use("*", cors());
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
