import React from 'react'
import am from '../assets/am.jpg'
import {CiLinkedin} from 'react-icons/ci'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
const AboutMe = () => {
  return (
    
    <div className='md:flex bg-gray-100 max-w-auto md:w-[60%]   items-center mx-10 px-5 py-5 rounded-xl mb-10 pt-20 pb-20'>
      <div className='mr-8 '>
        <div className='w-[300px] h-[450px] bg-[#8ab4f8] font-[Montserrat] rounded-xl relative items-center m-auto text-center'>
          <img src={am} alt="" className='absolute rounded-full -top-10 left-20' />

            <div className='absolute top-32 text-white tracking-wider'>
            <h2 className='font-semibold text-xl'>HELLO, I'M
            <br />  ASHISH KHATI
            </h2>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ratione repellendus nam officia. Natus placeat magni quisquam eum cupiditate sed.</p>
            </div>
            <div className='flex space-x-1 rounded-full text-black w-auto  absolute bottom-10 left-16  h-10'>
              <CiLinkedin className=' w-[50px] h-[30px] bg-[#8ab4f8] cursor-pointer' />
              <AiFillGithub className='bg-[#8ab4f8] w-[50px] h-[30px] cursor-pointer'/>
              <BsInstagram className='bg-[#8ab4f8] w-[50px] h-[30px]  cursor-pointer'/>

            </div>
       
        </div>
       
      </div>
      <div className='mt-20'>
        <h1 className='mb-5'>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, officiis cupiditate modi pariatur ratione dolore non in, libero neque consequatur enim est amet nostrum tempora repudiandae nemo voluptatibus similique voluptates magni, voluptate nesciunt distinctio? Sequi et sunt, natus suscipit nisi, tenetur dolorum esse, error expedita fuga modi optio commodi nulla.</p>
        <button className='bg-green-400 text-white cursor-pointer hover:bg-green-500 outline-none border mt-5'>Contact Me</button>
      </div>
    </div>
  )
}

export default AboutMe

