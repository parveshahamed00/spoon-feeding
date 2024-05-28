import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";



const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-cards">
        <div className='home-nav'>
           <Link to='/*' style={{ textDecoration: 'none'}}><Card title='AI'/></Link>
        <Link to='ds/*' style={{ textDecoration: 'none'}}><Card title='DS'/></Link>
        <Link to='mad/*' style={{ textDecoration: 'none'}}><Card title='MAD'/></Link>
        <Link to='ml/*' style={{ textDecoration: 'none'}}><Card title='ML'/></Link>
        <Link to='rm/*' style={{ textDecoration: 'none'}}><Card title='RM'/></Link>    
      </div>
       </div>
    </div>
  );
};

export default HeroSection;
