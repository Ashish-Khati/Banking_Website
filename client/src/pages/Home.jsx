import React from 'react'
import { Nav,Header,Banner,Service, Action, About, Contact } from '../components'
const Home = () => {
  return (
    <div className='max-w-auto'>
        <Nav/>
        <Header/>
        <Banner/>
        <Action/>
        <About/>
        <Service/>
        <Contact/>

    </div>
  )
}

export default Home