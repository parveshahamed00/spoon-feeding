import React from 'react'
import AiBook from './AiBook/AiBook'
import DsBook from './DsBook.js/DsBook'
import MadBook from './MadBook/MadBook'
import MlBook from './MlBook/MlBook'
import RmBook from './RmBook/RmBook'


const Books = () => {
  return (
    <>
    <div className='books-container'>
    <AiBook/>
    <DsBook/>
    <MadBook/>
    <MlBook/>
    <RmBook/>
    </div>
    
    </>
  )
}

export default Books