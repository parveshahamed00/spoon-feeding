import React from 'react'
import RmunitI from './RmUnits/RmunitI';
import RmunitII from './RmUnits/RmunitII';
import RmunitIII from './RmUnits/RmunitIII';
import RmunitIV from './RmUnits/RmunitIV';
import RmunitV from './RmUnits/RmunitV';
import RmUnitNav from './RmUnits/RmUnitNav';
import { Routes, Route, } from "react-router-dom";

const Rm = () => {
  return (
   <>
      <Routes>
            <Route path="/" element={<RmUnitNav/>}></Route>
            <Route index path="rmunitI" element={<RmunitI />} />
            <Route path="rmunitII" element={<RmunitII/>} />
            <Route path="rmunitIII" element={<RmunitIII />} />
            <Route path="rmunitIV" element={<RmunitIV/>} />
            <Route path="rmunitV" element={<RmunitV/>} />
          </Routes>

   </>
  )
}

export default Rm