const express = require("express");
const app = express();
const room = require("./../models/enterRooms");

app.post("/enterRooms", async (req, res) => {

    const roomsqty=req.body.quantity,
    const type=req.body.type

    const roomsColl=new room({
        roomType:type,
        roomsQty:roomsqty
    })

    const response=roomsColl.save()
    res.status(201).json({
        response
    })

});

module.exports = app;
