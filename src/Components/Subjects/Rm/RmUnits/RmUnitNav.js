import React from 'react'
import { Link } from 'react-router-dom'

const RmUnitNav = () => {
  return (
    <>
      <h1>Research Methodology</h1>
    <Link to='rmunitI'><h4>Unit - I</h4></Link>
    <Link to='rmunitII'><h4>Unit - II</h4></Link>
    <Link to='rmunitIII'><h4>Unit - III</h4></Link>
    <Link to='rmunitIV'><h4>Unit - IV</h4></Link>
    <Link to='rmunitV'><h4>Unit - V</h4></Link>
     <hr/>
    </>
  )
}

export default RmUnitNav