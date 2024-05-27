import React from 'react'
import Card from '../HeroSection/Card'

const BookSection = () => {
  return (
    <div className='hero-container'>
    <div className='hero-cards'>
        <Card title='AI'/>
        <Card title='Ds'/>
        <Card title='MAD'/>
        <Card title='ML'/>
        <Card title='RM'/>
    </div>
</div>
  )
}

export default BookSection