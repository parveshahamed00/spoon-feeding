import React from "react";
import "../css/Book.css";
import AiBookpdf from "../PDF/AndroidBook.pdf";
const MadBook = () => {
  return (
    <>
      <div className="Book-Container">
        <h1>Mobile Application Development</h1>
      </div>
      <div className="image-container">
        <a href={AiBookpdf} target="_blank">
          <img
            src="https://www.dreamtechpress.com/wp-content/uploads/2019/02/9789351197966.jpg"
            style={{ width: 400 }}
          />
        </a>
      </div>
    </>
  );
};

export default MadBook;
