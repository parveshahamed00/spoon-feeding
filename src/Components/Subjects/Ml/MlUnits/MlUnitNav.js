import React from 'react'
import { Link } from 'react-router-dom'

const MlUnitNav = () => {
  return (
    <>
      <h1 style={{color:'#BB0029'}}>Machine Learning</h1>
    <Link to='mlunitI'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - I</h4></Link>
    <Link to='mlunitII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - II</h4></Link>
    <Link to='mlunitIII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - III</h4></Link>
    <Link to='mlunitIV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - IV</h4></Link>
    <Link to='mlunitV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - V</h4></Link>
    </>
  )
}

export default MlUnitNav