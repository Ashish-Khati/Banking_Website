import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import { Home,Customer,AboutMe } from './pages'
const App = () => {
  return (
    <BrowserRouter>
    {/* <div className='max-w-screen'> */}
      {/* <Home/>
    <Customer/>
    <AboutMe/> */}
    {/* </div> */}
    <Routes>
    <Route exact path="/" element={<Home />} />
        <Route path="/viewcustomer" element={<Customer />} />
        <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

// sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]