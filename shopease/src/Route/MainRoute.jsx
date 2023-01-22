import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mobilepage from '../Components/Mobilepage'
// import SearchComp from '../Components/SearchComp'
import SingleMobileCard from '../Components/SingleMobileCard'
import Home from '../Pages/Home'
import SingleHomeCard from './SingleHomeCard'
import Cart from './Cart'
import Payment from '../Pages/Payment'
import Success from '../Pages/Success'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mobile" element={<Mobilepage />} />
            <Route path='/mobile/:id' element={<SingleMobileCard />} /> 
            <Route path="/deal/:id" element={<SingleHomeCard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/payment" element={<Payment />} />
            <Route path="/cart/payment/success" element={<Success />} />
        </Routes>
    </div>
  )
}

export default MainRoute