import React from "react";
import { Link } from "react-router-dom";

const RmunitIII = () => {
  return (
    <>
      <Link to="/">
        <h1>⬅</h1>
      </Link>
      <div className="unit-container">
        <h3>UNIT III</h3>
        <span>
          <b> SCALING, DATA COLLECTION </b> <br /> Measurements and scaling: Quantitative
          and qualitative data – Classifications of measurement scales –
          Goodness of measurement scales – Sources of error in measurement –
          Scaling – Scale classification bases – Scaling techniques –
          Comparative Scaling Techniques – Non- Comparative Scaling Techniques.
          Data Collection : Collection of Primary Data –– Observation Method –
          Interview method – Collection of data through Questionnaires –
          Collection of data through Schedules – Difference between
          Questionnaire and schedule – Guidelines for constructing
          Questionnaire/schedule – Some other methods of data collection –
          Collection of secondary data – Selection of Appropriate method for
          data collection.
        </span>
      </div>
    </>
  );
};

export default RmunitIII;
