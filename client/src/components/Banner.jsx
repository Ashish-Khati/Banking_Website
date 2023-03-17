import React from 'react'
const Banner = () => {
  return (
    <div className='max-w-auto h-[800px]  pt-52 bg-[url("./assets/cm.jpg")] bg-cover'>
      <div className="px-10  text-white">
        <h1 className='text-3xl font-extrabold mb-5 text-white'><span className='bg-blue-900 rounded-lg border-4 border-blue-400  px-4 py-4'>Welcome to Online Banking</span></h1>
        <h1 className='pt-5 font-bold'>Online Banking Service <br /><span className='text-blue-500'>Recent</span> Banking System Is <br />The Best Service Of Man</h1>
        <div className='flex space-x-8 mt-5'>
          <button className='bg-green-400 '>Contact us</button>
          <button className='bg-green-400 '>Learn more</button>
        </div>
      </div>
    
    </div>
  )
}

export default Banner