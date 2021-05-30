const express = require("express");
const app = express();
const room = require("./../model/hotel_room");
const moment = require("moment");
const booking = require("./../model/room_booking");
app.patch("/roomBooking", async (req, res) => {
  try {
    const hotel_id = req.body.hotelId;
    const type = req.body.roomType;
    const qty = req.body.qty;
    // const check = await room.find({
    //   '_id': hotel_id,
    //   'roomsAvailable': { $elemMatch: { 'roomType': type, 'quantityAvailable': {$gt:1} } },
    // });      
    // if(check){
      const success = await room.update(
        {
          '_id': hotel_id,
          'roomsAvailable': { $elemMatch: { 'roomType': type } },
        },
        {
          $inc: { "roomsAvailable.$.quantityAvailable": -qty },
        }
      );
      res.json({
        available: success.length,
        success,
      });
    //}     
    // else{
    //   return res.json({message:'rooms not available for this category anymore'})
    // }
    
    
  } catch (err) {
    res.send(err);
  }
});

module.exports = app;
