import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <h3>{props.title}</h3>
    </div>
  );
};

export default Card;
