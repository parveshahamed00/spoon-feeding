import React from 'react'
import { Link } from 'react-router-dom'

const DsUnitNav = () => {
  return (
    <>
    <h1 style={{color:'#BB0029'}}>Discrete Structure - II </h1>
    <Link to='dsunitI' style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - I</h4></Link>
    <Link to='dsunitII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - II</h4></Link>
    <Link to='dsunitIII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - III</h4></Link>
    <Link to='dsunitIV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - IV</h4></Link>
    <Link to='dsunitV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - V</h4></Link>
    
    </>
  )
}

export default DsUnitNav