const express=require('express')
const app=express()
const roomy=require('./../model/hotels_room')
const booking=require('./../model/roomBooking')


app.post('/booking', async(req,res)=>{
       
   const id=req.body.hotelId  
       
   const data=await roomy.findOne({'_id':id},
        {
        room:{
           $elemMatch:{
              type:"super-deluxe",              
           },
           $inc:{number:-1}
        }
      }     
      
   )  
   res.json(data)

})
module.exports=app


/* app.post('/booking', async(req,res)=>{
       
   const id=req.body.hotelId  
       
   const data=await roomy.findById({'_id':id},
        {
        room:{
           $elemMatch:{
              type:"presidential suite"
           }
        }
      }
           
   )  
   res.json(data)

})
      
      
   )*/
//    Survey.updateOne(
//       {
//           _id: surveyId,
//           recipients: {
//               $elemMatch: { email: "a@gmail.com", responded: false }
//           }
//       }, 
//       {
//           $inc: { [choice]: 1 },
//           $set: { 'recipients.$.responded': true }
//       }
//   ).exec();