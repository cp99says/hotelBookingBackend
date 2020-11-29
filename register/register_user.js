const express=require('express')
const app=express()
const user=require('./../model/user')
const hotel=require('./../model/hotels')
const multer=require('multer')
var multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/user/");
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
  });
  var upload = multer({ storage: multerStorage });
  var uploadFile = upload.any("file");

app.post('/data', uploadFile,async(req,res)=>{  
    const a=new user({        
        name:req.body.name,
        email:req.body.email,        
        address:req.body.address,        
        contact_number:req.body.contact_number
        
    })
    const data=await a.save()
    res.status(201).json({
      message:'success',
      data
    })

})

app.get('/data', async(req,res)=>{
  const a = await user.find();
  try {
    res.status(200).json({
      status: "success",
      hotels_registered: a.length,
      data: a,
    });
  } catch (err) {
    res.json(err);
  }
})


module.exports=app