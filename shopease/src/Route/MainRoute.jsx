import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mobilepage from '../Components/Mobilepage'
import SearchComp from '../Components/SearchComp'
import SingleMobileCard from '../Components/SingleMobileCard'
import Cart from './Cart'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<SearchComp />} />
            <Route path="/mobile" element={<Mobilepage />} />
            <Route path='/mobile/:id' element={<SingleMobileCard />} /> 
            {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
    </div>
  )
}

export default MainRoute