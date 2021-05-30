const express=require('express')
const hotels=require('./../model/hotels')
const app=express()

app.patch('/ratingsAndReviews',async (req,res)=>{
    const review=req.body.review
    const hotelId=req.body.hotelid
    const rating=req.body.rating   
    
    try{
        const success=await hotels.update({'_id':'60b396526be97a1ed4764af5'},
        {$push:{'famous.reviews':review,'famous.rating':rating}})
        res.send(success)
    }catch(err){
        res.send(err)
        console.log(err)
    }
})


module.exports=app