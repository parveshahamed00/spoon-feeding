import React from 'react'
import { Link } from 'react-router-dom'

const DsUnitNav = () => {
  return (
    <>
    <h1>Discrete Structure - II </h1>
    <Link to='dsunitI'><h4>Unit - I</h4></Link>
    <Link to='dsunitII'><h4>Unit - II</h4></Link>
    <Link to='dsunitIII'><h4>Unit - III</h4></Link>
    <Link to='dsunitIV'><h4>Unit - IV</h4></Link>
    <Link to='dsunitV'><h4>Unit - V</h4></Link>
    <hr/>
    </>
  )
}

export default DsUnitNav