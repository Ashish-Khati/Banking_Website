const express=require('express')
const router=express.Router();
require('../DB/conn')
const User=require('../models/userSchema')
const Passbook=require('../models/passbookSchema')

router.get("/user",async(req,res)=>{
  try{
    const allData=await User.find({});
    res.send({status:"ok",data:allData});
  }
  catch(error){
      console.log(error)
  }
})



// router.post('/register',(req,res)=>{
//     const {name,myaccount, balance}=req.body
//      if(!name|| !myaccount || !balance)
//      {
//         return res.status(422).json({error:"fill all field"})
//      }

//      User.findOne({myaccount:myaccount})
//      .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Already exist"}) 
//         }

//         const user=new User({name,myaccount, balance})
//         user.save().then(()=>{
//             res.status(201).json({message:"Inserted successfully"})
//         })
//         .catch((err)=>res.status(500).json({error:"Failed to register"}))
//      }).catch(err=>{ console.log(err)})

//     console.log(name)
//     console.log(balance)
//     // res.json({message:req.body}) 

// })



// router.post('/transfer', async (req, res) => {
//     const {name,myaccount,receiveraccount,amount}=req.body;
//     // console.log(receiveraccount);
//     try {
//       // Find the sender and check if they have enough balance
//       const sender = await User.findOne({ myaccount: myaccount });
//       const receiver = await User.findOne({ myaccount: receiveraccount});
//         console.log(receiver);
      
//       if (!sender || sender.balance < amount) {
//         return res.status(400).json({ error: 'Invalid sender account or insufficient balance' });
//       }
  
//       // Find the receiver
     
//       if (!receiver) {
//         return res.status(400).json({ error: 'Invalid receiver account' });
//       }
  
//       // Update the balance of the sender and receiver
//       const senderUpdated = await User.findOneAndUpdate({ myaccount: myaccount },
//          { $inc: { balance: -amount } },
//           { new: true });
//       console.log(senderUpdated)
//       const receiverUpdated = await User.findOneAndUpdate({myaccount: receiveraccount  }, { $inc: { balance: amount } }, { new: true });
//       console.log(receiverUpdated)
  
//       res.status(200).json({ sender: senderUpdated, receiver: receiverUpdated });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });



router.post('/transfer', async (req, res) => {
  const { name, myaccount, receiveraccount, amount } = req.body;
  console.log(myaccount);
  try {
    // Find the sender and check if they have enough balance
    const sender = await User.findOne({ myaccount: myaccount });
    console.log(sender);
    const receiver = await User.findOne({ myaccount: receiveraccount });
    console.log(receiver);
   
    if (!sender) {
      res.status(200).json(2);
    } 

   else if (!receiver) {
      res.status(200).json(1);
    }
    
   else if (sender.balance < amount) {
      res.status(200).json(0);
    }

    // Find the receiver
    if (sender && receiver && sender.balance >= amount) {
      // Update the balance of the sender and receiver
      const senderUpdated = await User.findOneAndUpdate({ myaccount: myaccount }, { $inc: { balance: -amount } }, { new: true });
      console.log(senderUpdated)
      const receiverUpdated = await User.findOneAndUpdate({ myaccount: receiveraccount }, { $inc: { balance: amount } }, { new: true });
      console.log(receiverUpdated)

      res.status(200).json({ sender: senderUpdated, receiver: receiverUpdated });
    }
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }

});


// *****************************************************************************************************

// passbook 
// router.get('/passbook/:accountNumber', (req, res) => {
//   const accountNumber = req.params.accountNumber;
//   Passbook.findOne({ accountNumber }, (err, passbook) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Server error');
//     } else {
//       res.send(passbook);
//     }
//   });
// });


// router.post('/passbook/:accountNumber', (req, res) => {
//   const accountNumber = req.params.accountNumber;
//   const { date, description, amount } = req.body;
//   Passbook.findOne({ accountNumber }, (err, passbook) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Server error');
//     } else if (!passbook) {
//       res.status(404).send('Passbook not found');
//     } else {
//       passbook.transactions.push({ date, description, amount });
//       passbook.save((err, updatedPassbook) => {
//         if (err) {
//           console.log(err);
//           res.status(500).send('Server error');
//         } else {
//           res.send(updatedPassbook);
//         }
//       });
//     }
//   });
// });


// ***********************************************************************************************

router.get('/passbook/:accountNumber', (req, res) => {
  const { accountNumber } = req.params;
  Passbook.findOne({ accountNumber })
    .then(passbook => res.json(passbook))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/passbook/:accountNumber', (req, res) => {
  const { accountNumber } = req.params;
  const { date, description, amount } = req.body;
  Passbook.findOne({ accountNumber })
    .then(passbook => {
      if (!passbook.transactions) {
        passbook.transactions = [];
      }
      passbook.transactions.push({ date, description, amount });
      return passbook.save();
    })
    .then(passbook => res.json(passbook))
    .catch(err => res.status(500).json({ error: err.message }));
});

  
module.exports = router;