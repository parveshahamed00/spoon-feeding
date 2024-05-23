import React from 'react'
import MlunitI from './MlUnits/MlunitI';
import MlunitII from './MlUnits/MlunitII';
import MlunitIII from './MlUnits/MlunitIII';
import MlunitIV from './MlUnits/MlunitIV';
import MlunitV from './MlUnits/MlunitV';
import MlUnitNav from './MlUnits/MlUnitNav';
import { Routes, Route, } from "react-router-dom";

const Ml = () => {
  return (
   <>
      <Routes>
            <Route path="/" element={<MlUnitNav/>}></Route>
            <Route index path="mlunitI" element={<MlunitI />} />
            <Route path="mlunitII" element={<MlunitII />} />
            <Route path="mlunitIII" element={<MlunitIII />} />
            <Route path="mlunitIV" element={<MlunitIV/>} />
            <Route path="mlunitV" element={<MlunitV />} />
          </Routes>

   </>
  )
}

export default Ml