import React from "react";
import "../css/Book.css";
import AiBookpdf from "../PDF/AndroidBook.pdf";
const DsBook = () => {
  return (
    <>
      <div className="Book-Container">
        <h1>Discrete Structure</h1>
      </div>
      <div className="image-container">
        <a href={AiBookpdf} target="_blank">
          <img
            src="https://5.imimg.com/data5/NK/KJ/GLADMIN-17084875/discrete-structures-book.png"
            style={{ width: 400 }}
          />
        </a>
      </div>
    </>
  );
};

export default DsBook;
