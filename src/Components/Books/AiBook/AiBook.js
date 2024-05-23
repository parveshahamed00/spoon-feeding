import React from "react";
import "../css/Book.css";
import AiBookpdf from "../PDF/AndroidBook.pdf";
const AiBook = () => {
  return (
    <>
      <div className="Book-Container">
        <h1>Artificial Intelligence</h1>
      </div>
      <div className="image-container">
        <a href={AiBookpdf} target="_blank">
          <img src="https://m.media-amazon.com/images/I/717o52FMCKL._SY522_.jpg" style={{ width: 400 }}/>
        </a>
      </div>
    </>
  );
};

export default AiBook;
