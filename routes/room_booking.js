const express=require('express')
const app=express()
const room=require('./../model/hotels_room')



app.post('/booking', async(req,res)=>{
    const name=req.body.name
    const hotel=req.body.hotel
    const roomType=req.body.type
    const number=req.body.number
    const email=req.body.email
    
})



module.exports=app
