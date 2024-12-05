import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Quotes from 'inspirational-quotes';

function App() {
  //State om het citaat bij te houden
  const [quote, setQuote] = useState(null);

  //Laad het eerste citaat bij het opstarten van de pagina
  useEffect(() => {
    //Haal een citaat op zodra de pagina is geladen
    setQuote(Quotes.getQuote());
  }, []); // Zorg
  
  return (
    <div className='App'>
      <h1> Motivatie van de dag</h1>
        <div className='motivatie-container'>
        {quote ? (
          <div>
            <p className='motivatie-quote'>"{quote.text}" </p>
            <p className='motivatie-author'> - {quote.author}</p>
            <button onClick={getNewQuote}>Volgende citaat</button>
          </div>
        ) : (
          <p>Laad een citaat...</p>
        )}
        </div>
    </div>
);
}

export default App;

function getQuote(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'localhost')
}