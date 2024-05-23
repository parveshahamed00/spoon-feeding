import React from "react";
import { Link } from "react-router-dom";

const MadunitI = () => {
  return (
    <>
      <Link to="/">
        <h1>⬅</h1>
      </Link>
      <div className="unit-container">
        <h3>UNIT I</h3>
        <span>
          <b>GETTING STARTED WITH MOBILITY</b> <br /> Introduction – Mobility panorama – Mobile
          Platforms – App Development Approaches - Android overview –Setting up
          Development Environment - Saying Hello to Android – Creating the first
          app step by step – Setting up an emulator – Behind the scenes –
          Traversing an android app project structure – Logical components of an
          android app – Android tool repository – Installing and running app
          devices.
        </span>
      </div>
    </>
  );
};

export default MadunitI;
