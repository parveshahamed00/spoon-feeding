import React from "react";
import AiBookpdf from "../PDF/AndroidBook.pdf";
const RmBook = () => {
  return (
    <>
      <div className="Book-Container">
      
      </div>
      <div className="image-container">
        <a href={AiBookpdf} target="_blank">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbxg1URFMXv78YjUa_ror8p10vvac-u7U1alvnGBx8w&s"
          />
        </a>
      </div>
    </>
  );
};

export default RmBook;
