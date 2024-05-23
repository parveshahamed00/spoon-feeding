import React from 'react'
import '../css/Book.css'
import AiBookpdf from '../PDF/AndroidBook.pdf'
const AiBook = () => {
   
  return (
    <>
    <div className='Book-Container'>
    <h1>Artificial Intelligence</h1>
    </div>
    <div>
    <a href={AiBookpdf} target = "_blank">Link</a>
    </div>
    </>
  )
}

export default AiBook