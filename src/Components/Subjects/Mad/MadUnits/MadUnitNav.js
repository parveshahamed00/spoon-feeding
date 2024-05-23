import React from 'react'
import { Link } from 'react-router-dom'

const MadUnitNav = () => {
  return (
    <>
      <h1>Mobile Application Development</h1>
    <Link to='madunitI'><h4>Unit - I</h4></Link>
    <Link to='madunitII'><h4>Unit - II</h4></Link>
    <Link to='madunitIII'><h4>Unit - III</h4></Link>
    <Link to='madunitIV'><h4>Unit - IV</h4></Link>
    <Link to='madunitV'><h4>Unit - V</h4></Link>
     <hr/>
    </>
  )
}

export default MadUnitNav