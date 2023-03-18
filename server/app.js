const express=require('express')
const app=express();
const dotenv=require('dotenv')
require('./DB/conn')
dotenv.config({path:'./config.env'})
const PORT=process.env.PORT

const routes=require('./router/auth')
// middleware
app.use(express.json());
app.use('/',routes)



// app.get('/',(req,res)=>{
//     res.send(`Hello myself Ashish`)
// })

app.listen(PORT,()=>{
    console.log(`server is running`)
})