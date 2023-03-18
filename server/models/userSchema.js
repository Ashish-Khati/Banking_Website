const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    myaccount:{
        type:Number,
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
   
})

const User=mongoose.model('USERDATA',userSchema);

module.exports=User;