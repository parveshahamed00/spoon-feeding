import React from "react";
import { Link } from "react-router-dom";

const MlunitII = () => {
  return (
    <>
      <Link to="/">
        <h1>⬅</h1>
      </Link>
      <div className="unit-container">
        <h3>UNIT II</h3>
        <span>
          <b>REGRESSION  </b> <br />
          Introduction – Simple Regression – Multiple Regression : Polynomial
          Regression – Model Assessment – Training Error – Generalized Error –
          Testing Error – Irreducible Error – Bias – Variance Tradeoff. Ridge
          Regression – Lasso Regression: All Subset Algorithm – Greedy Algorithm
          For Feature Selection – Regularization For Feature Selection –
          Non-Parametric Regression: K-Nearest Neighbor Regression – Kernel
          Regression
        </span>
      </div>
    </>
  );
};

export default MlunitII;
