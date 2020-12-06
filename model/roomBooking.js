const mongoose=require('mongoose')


const schema=mongoose.Schema({
    name:{type:String},
    userId:{type:String},
    hotelId:{type:String},
    hotelName:{type:String},
    numberOfRooms:{type:Number},
    roomType:{type:String},
    daysOfStay:{type:Number}
})

module.exports=mongoose.model('Booking',schema)