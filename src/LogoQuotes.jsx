import React, { useState,useEffect } from 'react'
import logo from './images/logo.png'
const LogoQuotes = () => {
  let [quote, setQuote] = useState({});
  function generateQuote() {
    
    fetch("https://type.fit/api/quotes")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        console.log(e);
        let random = Math.floor(Math.random() * e.length);
        setQuote({ quote: e[random].text, author: e[random].author});
      });
  }
  useEffect(() => generateQuote, []);
  return (
    <section className='navbar'>
<div className="logo"><img src={logo} alt="" srcset="" /></div>
<div className="quote">
  <h1>" {quote.quote} - {quote.author} "</h1>
</div>
    </section>
  )
}

export default LogoQuotes