/*
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
  }, []); // Zorg ervoor dat dit eenmaal uitgevoerd wordt.

  const getNewQuote = () => {
    //Haal een nieuwe citaat op wanneer de gebruiker de knop klikt
    setQuote(Quotes.getQuote());
  };
  
  return (
    <div className='App'>
    <section className="motivatie-sectie">
      <h1> Motivatie van de dag</h1>
        <div className='motivatie-container'>
        {quote ? (
          <div id="motivatie-quote">
            <p>"{quote.text}" </p>
            <p className='auteur'> - {quote.author}</p>
    </>
    ) : (
          <p> Laad citaat..</p>
    )}
        </div>
           <button onClick={getNewQuote}>Volgende citaat</button>
          </section>
    </div>
    */
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
    <div className='App'>
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

function getQuote(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'localhost')
}

);
}

export default App;

function getQuote(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'localhost')
}
