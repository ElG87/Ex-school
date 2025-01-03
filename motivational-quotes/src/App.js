/*
import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Quotes from 'inspirational-quotes'; // importeren van de module

function App() {
  //State om het citaat bij te houden
  const [quote, setQuote] = useState({
    quote: "Welkom! Klik op de knop voor een inpirerende quote.",
    author:""
  });

  const getNewQuote = () => {
    const randomQuote = InspirationalQuotes.getQuote(); //Haalt nieuwe quotes op
    setQuote({
      quote: randomQuote.quote ,
      author: randomQuote.author
    });
  };

  return (
    <div className="App">
      <header>
        <h1>
          Motivatie van de Dag
        </h1>
      </header>
      <main>
        <section className="motivatie-sectie">
          <div id="motivatie-quote">
            <p>"{quote.quote}"</p>
            <p className="auteur">- {quote.author}</p>
          </div>
          <button id="next-quote" onClick={getNewQuote}>Volgende Citaat</button>
        </section>
      </main>
    </div>
);
}

export default App;
*/

// src/App.js

import React, { useState} from 'react';
import { BrowserRouter as Router, Router, Switch, Link } from 'react-router-dom';
import './App.css';
import InspirationalQuotes from 'inspirational-quotes'; // importeren van de module

function App() {
  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    const newQuote = InspirationalQuotes.getQuote(); //Haalt een quote op
    setQuote(newQuote.text); // Laat de tekst van de quote zien
  };

  return (
    <div>
      <header>
        <h1>Motivatie</h1>
        <p>Klik op de knop hier onder om een inspirerende quote te zien!</p>
      </header>
      <main>
        <button onClick={generateQuote}>Klik hier voor motivatie!
        </button>
        {quote && <p className='quote'>"{quote}"</p>}
      </main>
    </div>
  );
}
export default App;