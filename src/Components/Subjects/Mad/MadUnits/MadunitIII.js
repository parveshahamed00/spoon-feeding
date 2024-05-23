import React from "react";
import { Link } from "react-router-dom";

const MadunitIII = () => {
  return (
    <>
      <Link to="/">
        <h1>⬅</h1>
      </Link>
      <div className="unit-container">
        <h3>UNIT III</h3>
        <span>
          <b>BUILDING BLOCKS OF MOBILE APPS II </b> <br /> Introduction –
          Threads – AsyncTask – Service – States and life cycle methods –
          Initiating a service – Intent Service – Bound Service – Notifications
          – Intents and intent Resolutions – Broadcast Receivers – Telephony and
          SMS
        </span>
      </div>
    </>
  );
};

export default MadunitIII;
