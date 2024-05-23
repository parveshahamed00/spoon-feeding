import React from 'react'
import { Link } from 'react-router-dom'

const UnitsNav = () => {
  return (
    <>
    <Link to='unitI'><h4>Unit - I</h4></Link>
    <Link to='unitII'><h4>Unit - II</h4></Link>
    <Link to='unitIII'><h4>Unit - III</h4></Link>
    <Link to='unitIV'><h4>Unit - IV</h4></Link>
    <Link to='unitV'><h4>Unit - V</h4></Link>
     <hr/>
    </>
  )
}

export default UnitsNav