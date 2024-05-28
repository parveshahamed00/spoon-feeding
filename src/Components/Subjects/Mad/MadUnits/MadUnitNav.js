import React from 'react'
import { Link } from 'react-router-dom'

const MadUnitNav = () => {
  return (
    <>
      <h1 style={{color:'#BB0029'}}>Mobile Application Development</h1>
    <Link to='madunitI'style={{ textDecoration: 'none', color: '#BB0029'}}><h4>Unit - I</h4></Link>
    <Link to='madunitII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - II</h4></Link>
    <Link to='madunitIII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - III</h4></Link>
    <Link to='madunitIV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - IV</h4></Link>
    <Link to='madunitV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - V</h4></Link>
    </>
  )
}

export default MadUnitNav