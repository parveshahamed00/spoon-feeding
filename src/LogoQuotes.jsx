import React, { useState,useEffect } from 'react'
import logo from './images/logo.png'
const LogoQuotes = () => {
  let [quote, setQuote] = useState({});
  function generateQuote() {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        console.log(e);
        setQuote({ quote: e.data[0].quoteText, author: e.data[0].quoteAuthor });
      });
  }
  useEffect(() => generateQuote, []);
  return (
    <section className='navbar'>
<div className="logo"><img src={logo} alt="" srcset="" /></div>
<div className="quote">
  {quote!==""  && <h1>" {quote.quote} - {quote.author} "</h1>}
</div>
    </section>
  )
}

export default LogoQuotes