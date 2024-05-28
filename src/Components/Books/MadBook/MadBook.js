import React from "react";
import AiBookpdf from "../PDF/AndroidBook.pdf";
const MadBook = () => {
  return (
    <>
      <div className="Book-Container">
     
      </div>
      <div className="image-container">
        <a href={AiBookpdf} target="_blank">
          <img
            src="https://www.dreamtechpress.com/wp-content/uploads/2019/02/9789351197966.jpg"
          />
        </a>
      </div>
    </>
  );
};

export default MadBook;
