import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import { Home,Customer } from './pages'
const App = () => {
  return (
    <BrowserRouter>
    {/* <div className='max-w-screen'>
      <Home/>
    <Customer/>
    </div> */}
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/viewcustomer" element={<Customer />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

// sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]