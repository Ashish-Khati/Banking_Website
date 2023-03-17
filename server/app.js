const express=require('express')
const dotenv=require('dotenv')
const mongoose= require('mongoose')
const app=express();
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connection successfull")
}).catch((err)=>console.log('no connection',err))

app.get('/',(req,res)=>{
    res.send(`Hello myself Ashish`)
})

app.listen(3000,()=>{
    console.log(`server is running`)
})