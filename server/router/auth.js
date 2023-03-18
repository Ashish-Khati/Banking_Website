const express=require('express')
const router=express.Router();
require('../DB/conn')
const User=require('../models/userSchema')
router.get('/',(req,res)=>{
    res.send("hello");
})
router.get('/register',(req,res)=>{
    res.send("hello from register");
})

router.post('/register',(req,res)=>{
    const {name,myaccount, balance}=req.body
     if(!name|| !myaccount || !balance)
     {
        return res.status(422).json({error:"fill all field"})
     }

     User.findOne({myaccount:myaccount})
     .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Already exist"}) 
        }

        const user=new User({name,myaccount, balance})
        user.save().then(()=>{
            res.status(201).json({message:"Inserted successfully"})
        })
        .catch((err)=>res.status(500).json({error:"Failed to register"}))
     }).catch(err=>{ console.log(err)})

    console.log(name)
    console.log(balance)
    // res.json({message:req.body}) 

})



router.post('/transfer', async (req, res) => {
    const {name,myaccount,receiveraccount,amount}=req.body;
    // console.log(receiveraccount);
    try {
      // Find the sender and check if they have enough balance
      const sender = await User.findOne({ myaccount: myaccount });
      const receiver = await User.findOne({ myaccount: receiveraccount});
 console.log(receiver);
      
      if (!sender || sender.balance < amount) {
        return res.status(400).json({ error: 'Invalid sender account or insufficient balance' });
      }
  
      // Find the receiver
     
      if (!receiver) {
        return res.status(400).json({ error: 'Invalid receiver account' });
      }
  
      // Update the balance of the sender and receiver
      const senderUpdated = await User.findOneAndUpdate({ myaccount: myaccount }, { $inc: { balance: -amount } }, { new: true });
      console.log(senderUpdated)
      const receiverUpdated = await User.findOneAndUpdate({myaccount: receiveraccount  }, { $inc: { balance: amount } }, { new: true });
      console.log(receiverUpdated)
  
      res.status(200).json({ sender: senderUpdated, receiver: receiverUpdated });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });






// router.post('/transfer-funds', async (req, res) => {
//     // const { senderId, receiverId, amount } = req.body;
//     const {name,myaccount,receiveraccount,amount}=req.body;
  
//     try {
//         const sender = await User.findOne({ myaccount: myaccount });
//       // Find the sender and check if they have enough balance
//       const senderID = await User.findOne({ _id: senderId });
//       if (!sender || sender.balance < amount) {
//         return res.status(400).json({ error: 'Invalid sender ID or insufficient balance' });
//       }
  
//       // Find the receiver
//       const receiver = await User.findOne({ _id: receiverId });
//       if (!receiver) {
//         return res.status(400).json({ error: 'Invalid receiver ID' });
//       }
  
//       // Update the balances of the sender and receiver atomically
//       const result = await User.updateMany(
//         { _id: { $in: [senderId, receiverId] } },
//         { $inc: { balance: sender._id.equals(senderId) ? -amount : amount } },
//         { new: true }
//       );
  
//       // Check if the update was successful
//       if (result.nModified !== 2) {
//         return res.status(500).json({ error: 'Failed to update balances' });
//       }
  
//       res.status(200).json({ sender: result.n === 2 ? sender : undefined, receiver });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });
  
  
module.exports = router;