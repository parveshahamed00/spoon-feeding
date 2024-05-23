import React from 'react'
import Aipyq from './Aipyq/Aipyq'
import Madpyq from './Madpyq/Madpyq'
import Dspyq from './Dspyq/Dspyq'
import Mlpyq from './Mlpyq/Mlpyq'
import Rmpyq from './Rmpyq/Rmpyq'

const Pyqs = () => {
  return (
    <> 
    <h1>
        Previous Year Questions
    </h1>
    <div>
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