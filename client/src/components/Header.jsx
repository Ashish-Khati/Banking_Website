import React from 'react'
const Header = () => {
  return (
   <div className='px-10 h-[80px] flex  space-x-10 justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='w-[200px] h-[80px] items-center'>
       <h1 className='pt-5 text-base tracking-widest text-center font-bold'> WEBSITE</h1>
       {/* <p className='text-base text-center tracking-wider'>Sparks foundation</p> */}

    </div>
    <div className='flex space-x-10 justify-between mx-10 '>
        <ul className='flex space-x-10 '>
            <li><a className='text-white hover:text-red-500' href="#">Home</a></li>
            <li><a className='text-white hover:text-red-500' href="#">Work</a></li>
            <li><a className='text-white hover:text-red-500' href="#">Service</a></li>
            <li><a className='text-white hover:text-red-500' href="#">Contact</a></li>
        </ul>
        <button className='bg-green-400 text-white rounded-lg hover:bg-blue-400'>Sign up</button>
    </div>
   </div>
  )
}

export default Header