import React from 'react'
import cal from '../Books/PDF/academiccalendar_2023_2024.pdf'
const Calendar = () => {
  return (
    <div className="image-container">
    <a href={cal} target="_blank">
     <button>Calendar</button> 
    </a>
  </div>
  )
}

export default Calendar