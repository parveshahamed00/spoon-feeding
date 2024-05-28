import React from 'react'
import Aipyq from './Aipyq/Aipyq'
import Madpyq from './Madpyq/Madpyq'
import Dspyq from './Dspyq/Dspyq'
import Mlpyq from './Mlpyq/Mlpyq'
import Rmpyq from './Rmpyq/Rmpyq'
import '../Pyqs/pyqs.css'

const Pyqs = () => {
  return (
    <> 
    <div className='Pyq-container'>
    
        <Aipyq/>
        <Dspyq/>
        <Madpyq/>
        <Mlpyq/>
        <Rmpyq/>
    </div>

    </>
  )
}

export default Pyqs