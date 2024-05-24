import React from "react";
import AiunitI from "./AiUnits/AiunitI";
import AiunitII from "./AiUnits/AiunitII";
import AiunitIII from "./AiUnits/AiunitIII";
import AiunitsIV from "./AiUnits/AiunitsIV";
import AiunitV from "./AiUnits/AiunitV";
import AiUnitsNav from "./AiUnits/AiUnitsNav";
import { Routes, Route, } from "react-router-dom";

const Ai = () => {
  return (
    <>
          <Routes>
            <Route path="/" element={<AiUnitsNav />}></Route>
            <Route index path="aiunitI" element={<AiunitI />} />
            <Route path="aiunitII" element={<AiunitII />} />
            <Route path="aiunitIII" element={<AiunitIII />} />
            <Route path="aiunitIV" element={<AiunitsIV />} />
            <Route path="aiunitV" element={<AiunitV />} />
          </Routes>
    </>
  );
};

export default Ai;
