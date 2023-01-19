import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mobilepage from '../Components/Mobilepage'
import SearchComp from '../Components/SearchComp'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<SearchComp />} />
            <Route path="/mobile" element={<Mobilepage />} />
        </Routes>
    </div>
  )
}

export default MainRoute