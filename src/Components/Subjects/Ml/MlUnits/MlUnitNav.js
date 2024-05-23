import React from 'react'
import { Link } from 'react-router-dom'

const MlUnitNav = () => {
  return (
    <>
      <h1>Machine Learning</h1>
    <Link to='mlunitI'><h4>Unit - I</h4></Link>
    <Link to='mlunitII'><h4>Unit - II</h4></Link>
    <Link to='mlunitIII'><h4>Unit - III</h4></Link>
    <Link to='mlunitIV'><h4>Unit - IV</h4></Link>
    <Link to='mlunitV'><h4>Unit - V</h4></Link>
     <hr/>
    </>
  )
}

export default MlUnitNav