import React from "react";
import AiBookpdf from "../PDF/AndroidBook.pdf";
const AiBook = () => {
  return (
    <>
      <div className="Book-Container">
      </div>
      <div className="image-container">
        <a href={AiBookpdf} target="_blank">
          <img src="https://m.media-amazon.com/images/I/717o52FMCKL._SY522_.jpg" />
        </a>
      </div>
    </>
  );
};

export default AiBook;
