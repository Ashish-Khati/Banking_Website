import React from 'react'
import newsletter from "../assets/newletter.jpg"
const Contact = () => {
  return (
   <div className='py-10 px-10 '>
    <h1 className='text-center'>Contact Us</h1>
   <div className='flex'>
   <div className='px-10 py-5 rounded-lg bg-blue-100 h-[650px] shadow-gray-900'>
    <div className=' pt-10'>
    <input type="text" placeholder='Full Name' className='w-[400px] h-[50px] px-5 rounded-md mb-10 outline-none border-b-8'   required /><br />
    <input type="email" placeholder='Email ID' className='w-[400px] h-[50px] px-5 rounded-md mb-10 outline-0 border-b-8' border required /><br />
    <textarea placeholder='Message' className='w-[400px] h-[50px] px-5 py-5 rounded-md mb-10 outline-none border-b-8' rows="30" cols="300" name="message" required></textarea><br />
    <button className='bg-green-400 px-5 py-5 text-white outline-none'>Send Message</button>
    </div>
   </div>
   <div>
    <img src={newsletter} alt="" />
    </div>
   </div>
  
   </div>
  )
}

export default Contact