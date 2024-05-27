import React from 'react'
import Card from './Card'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className='hero-cards'>
            <Card title='AI'/>
            <Card title='Ds'/>
            <Card title='MAD'/>
            <Card title='ML'/>
            <Card title='RM'/>
            <Card title='MAD PRACTICAL'/>
            <Card title='ML PRACTICAL'/>     
        </div>
    </div>
  )
}

export default HeroSection