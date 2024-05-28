import React from 'react'
import { Link } from 'react-router-dom'

const RmUnitNav = () => {
  return (
    <>
      <h1 style={{color:'#BB0029'}}>Research Methodology</h1>
    <Link to='rmunitI' style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - I</h4></Link>
    <Link to='rmunitII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - II</h4></Link>
    <Link to='rmunitIII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - III</h4></Link>
    <Link to='rmunitIV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - IV</h4></Link>
    <Link to='rmunitV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - V</h4></Link>
    </>
  )
}

export default RmUnitNav