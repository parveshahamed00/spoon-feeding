import React from 'react'
import { Link } from 'react-router-dom'

const AiUnitsNav = () => {
  return (
    <>
      <h1>Artificial Intelligence</h1>
    <Link to='aiunitI'><h4>Unit - I</h4></Link>
    <Link to='aiunitII'><h4>Unit - II</h4></Link>
    <Link to='aiunitIII'><h4>Unit - III</h4></Link>
    <Link to='aiunitIV'><h4>Unit - IV</h4></Link>
    <Link to='aiunitV'><h4>Unit - V</h4></Link>
     <hr/>
    </>
  )
}

export default AiUnitsNav