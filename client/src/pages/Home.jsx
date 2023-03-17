import React from 'react'
import { Nav,Header,Banner,Service, Footer, Action, About, Contact } from '../components'
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
        <Footer/>
    </div>
  )
}

export default Home