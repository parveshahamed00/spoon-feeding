import React from "react";
import { Link } from "react-router-dom";

const MlunitIII = () => {
  return (
    <>
      <Link to="/">
        <h1>⬅</h1>
      </Link>
      <div className="unit-container">
        <h3>UNIT III</h3>
        <span>
          <b>CLASSIFICATION  </b> <br /> Linear Classifiers –
          Logistic Regression – Decision Tree: Tree Terminology – Decision Tree
          Learning – Decision Boundaries – Random Forest – Naïve Byes –
          Clustering – K Means Clustering: Problem With Random Assignment Of
          Cluster Centroid – Finding Value Of K – Hierarchical Clustering:
          Distance Metrics – Linkage.
        </span>
      </div>
    </>
  );
};

export default MlunitIII;
