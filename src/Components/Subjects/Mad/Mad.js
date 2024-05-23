import React from 'react'
import MadunitI from './MadUnits/MadunitI'
import MadunitII from './MadUnits/MadunitII'
import MadunitIII from './MadUnits/MadunitIII'
import MadunitIV from './MadUnits/MadunitIV'
import MadunitV from './MadUnits/MadunitV'
import MadUnitNav from './MadUnits/MadUnitNav'
import { Routes, Route, } from "react-router-dom";

const Mad = () => {
  return (
   <>
      <Routes>
            <Route path="/" element={<MadUnitNav/>}></Route>
            <Route index path="madunitI" element={<MadunitI />} />
            <Route path="madunitII" element={<MadunitII />} />
            <Route path="madunitIII" element={<MadunitIII />} />
            <Route path="madunitIV" element={<MadunitIV />} />
            <Route path="madunitV" element={<MadunitV />} />
          </Routes>

   </>
  )
}

export default Mad