import React from "react";
import AiunitI from "./AiUnits/AiunitI";
import AiunitII from "./AiUnits/AiunitII";
import AiunitIII from "./AiUnits/AiunitIII";
import AiunitsIV from "./AiUnits/AiunitsIV";
import AiunitV from "./AiUnits/AiunitV";
import UnitsNav from "./AiUnits/UnitsNav";
import { Routes, Route, } from "react-router-dom";
import './css/Subject.css'

const Ai = () => {
  return (
    <>
      <h1>Artificial Intelligence</h1>
          <Routes>
            <Route path="/" element={<UnitsNav />}></Route>
            <Route index path="unitI" element={<AiunitI />} />
            <Route path="unitII" element={<AiunitII />} />
            <Route path="unitIII" element={<AiunitIII />} />
            <Route path="unitIV" element={<AiunitsIV />} />
            <Route path="unitV" element={<AiunitV />} />
          </Routes>
    </>
  );
};

export default Ai;
