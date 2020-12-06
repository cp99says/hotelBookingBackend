const mongoose = require("mongoose");
const express=require('express')
const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },  
  room:[{   
      type: {
      type: String,
      required: true,
      enum: ["deluxe", "super-deluxe", "presidential suite"],
    },
    number: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  }]
    
  
   
  
  
});

module.exports = mongoose.model("Hotel Rooms Tariff", schema);
