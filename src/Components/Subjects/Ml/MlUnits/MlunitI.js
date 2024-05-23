import React from "react";
import { Link } from "react-router-dom";

const MlunitI = () => {
  return (
    <>
      <Link to="/">
        <h1>⬅</h1>
      </Link>
      <div className="unit-container">
        <h3>UNIT I</h3>
        <span>
          <b> INTRODUCTION TO MACHINE LEARNING</b> <br /> Introduction – Machine
          Learning Process - Feature Engineering: Feature – Feature Engineering
          – Feature Extraction – Feature Selection – Feature Engineering Methods
          – Feature Engineering With Python. Data Visualization: Line Chart –
          Bar Chart – Pie Chart – Histograms – Scatter Plot – Box Plot –
          Plotting using Object Oriented Way – Seaborn. devices.
        </span>
      </div>
    </>
  );
};

export default MlunitI;
