import React from "react";
import "../css/Book.css";
import AiBookpdf from "../PDF/AndroidBook.pdf";
const MlBook = () => {
  return (
    <>
      <div className="Book-Container">
        <h1>Machine Learning</h1>
      </div>
      <div className="image-container">
        <a href={AiBookpdf} target="_blank">
          <img
            src="https://m.media-amazon.com/images/I/51pDPOyfLsS._AC_UF1000,1000_QL80_.jpg"
            style={{ width: 400 }}
          />
        </a>
      </div>
    </>
  );
};

export default MlBook;