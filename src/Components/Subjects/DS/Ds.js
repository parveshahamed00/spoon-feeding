import React from 'react'
import DsunitI from './DsUnits/DsunitI'
import DsunitII from './DsUnits/DsunitII'
import DsunitIII from './DsUnits/DsunitIII'
import DsunitIV from './DsUnits/DsunitIV'
import DsunitV from './DsUnits/DsunitV'
import { Route, Routes } from 'react-router-dom'
import DsUnitNav from './DsUnits/DsUnitNav'

const Ds = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<DsUnitNav/>}></Route>
        <Route path='dsunitI' element={<DsunitI/>}></Route>
        <Route path='dsunitII' element={<DsunitII/>}></Route>
        <Route path='dsunitIII' element={<DsunitIII/>}></Route>
        <Route path='dsunitIV' element={<DsunitIV/>}></Route>
        <Route path='dsunitV' element={<DsunitV/>}></Route>

    </Routes>
    </>
  )
}

export default Ds