import React from "react";
import { Link } from "react-router-dom";

const MadunitII = () => {
  return (
    <>
      <Link to="/">
        <h1>⬅</h1>
      </Link>
      <div className="unit-container">
        <h3>UNIT II</h3>
        <span>
          <b>BUILDING BLOCKS OF MOBILE APPS I </b> <br /> Introduction –
          Activity – Activity States – Life cycle methods – UI Resources –
          Layout resources – String resources – Image resources – UI Elements
          and Events – Event Handling Paradigm – UI elements – Interaction among
          activities – Navigation between activities – Exchanging data –
          Fragments – Building Fragments – Life cycle of fragments- Interaction
          between fragments – Action bar.
        </span>
      </div>
    </>
  );
};

export default MadunitII;
