import React from 'react'
import { Link } from 'react-router-dom'

const AiUnitsNav = () => {
  return (
    < >
      <h2 style={{color:'#BB0029'}}>Artificial Intelligence</h2>
    <Link to='aiunitI' style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - I</h4></Link>
    <Link to='aiunitII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - II</h4></Link>
    <Link to='aiunitIII'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - III</h4></Link>
    <Link to='aiunitIV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - IV</h4></Link>
    <Link to='aiunitV'style={{ textDecoration: 'none',color: '#BB0029'}}><h4>Unit - V</h4></Link>
    </>
  )
}

export default AiUnitsNav