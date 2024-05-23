import React from "react";
import { Link } from "react-router-dom";

const MadunitV = () => {
  return (
    <>
      <Link to="/">
        <h1>⬅</h1>
      </Link>
      <div className="unit-container">
        <h3>UNIT V</h3>
        <span>
          <b>TESTING AND PUBLISHING MOBILE APPS</b> Testing Android Apps:
          Introduction – Testing android app components – Activity – Service –
          Content provider – App testing landscape overview - Publishing Apps:
          Introduction - Groundwork – Configuring – Packaging – Distributing.
        </span>
      </div>
    </>
  );
};

export default MadunitV;
