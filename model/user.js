const mongoose=require('mongoose')

const user=mongoose.Schema({
   
      name:{
          type:String,      
          required: true,  
      },
      email:{
          type:String,
          required: true,
      },
     
      address:{
          type:String,
          required: true,
      },
      contact_number:{
          type:Number,
          required: true,
      },
      


})
module.exports=mongoose.model('user db',user)