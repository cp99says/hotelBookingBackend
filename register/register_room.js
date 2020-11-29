const express = require("express");
const app = express();
const roomSchema = require("./../model/hotels_room");
const { request } = require("./register_hotel");

app.post("/hotel_rooms", async (req, res) => {
  const a = new roomSchema({
    name: req.body.name,    
    room:{
      type: req.body.room.type,
      number: req.body.room.number,
      price: req.body.room.price,
    }         
    
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
  var id='5fc031e01adb8f51b822bcb5'
  // var id = req.body.id;
  // var obj = {

  
  // };  
  try {
    const data = await roomSchema.findOneAndUpdate(
      { name: "prateek" },
        {$push:{
              room:{
            type:'deluxe',
            price:4587,
            number:45
          }
        }      
          
    },
    {upsert:true}
    )
    res.send(data)
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
