import React from 'react'
import { Link } from 'react-router-dom'
import Pyqs from '../Pyqs/Pyqs'

const PyqsSection = () => {
  return (
    <div className='hero-container'>
    <div className='hero-cards'>
      <h2>Previous Year Question</h2>
       <Link to='pyqssection'><Pyqs/></Link>
    </div>
</div>
  )
}

export default PyqsSection