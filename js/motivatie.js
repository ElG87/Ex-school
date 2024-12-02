

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('quote'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const quotes = require('inspirational-quotes');

// const randomQuote = quotes.getRandomQuote();
// console.log(Quote.getRandomQuote()); // return any random quote

/*
console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author

const randomQuote = quotes.getRandomQuote();
console.log(randomQuote);

document.getElementById('quote').innerText = randomQuote.text;
*/

/*
function App() {
const quotes = require('inspirational-quotes');
let postQuote = quotes.getRandomQuote()
console.log(quotes.getRandomQuote());

  return (
    <div>
      <h2>Inspirerende uitspraken</h2>
      <p>druk op de knop voor een nieuwe inspirerende uitspraak.</p>
      <div>{postQuote}</div>
      <button id='quotebtn' onClick={refreshPage}>Nieuwe quote</button>

    </div>
  );
}

function refreshPage(){
    window.location.reload();
}

export default App;
*/
/*
    import { getQuote, getRandomQuote } from 'inspirational-quotes';

console.log(getQuote()); // returns quote (text and author)
console.log(getQuote({ author: false })); // return quote without author
console.log(getRandomQuote()); // return any random quote

document.getElementById('quote').innerText = randomQuote.text;

return (
    <div>
      <h2>Inspirerende uitspraken</h2>
      <p>druk op de knop voor een nieuwe inspirerende uitspraak.</p>
      <div>{postQuote}</div>
      <button id='quotebtn' onClick={refreshPage}>Nieuwe quote</button>

    </div>
  );
*/
  const arr = require('inspirational-quotes/data/data.json'),

    // utility to generate a random number
    randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    index = randomInt(0, arr.length), // random index to be used
    
    /**
     * 
     * Kept `getRandomQuote` method to ensure the backward compatibility as
     * All the version <= `v1.0.8` has this method
     * 
     * TO BE DEPRECATED SOON
     */
    getRandomQuote = () => arr[index].text,

    /**
     * 
     * By default, { author: true },
     * To hide author, pass options as { author: false }
     */
    getQuote = (options) => {
        !options && (options = {author: true}); // default option
        return {
            text: arr[index].text,
            ...(options && options.author ? { author: arr[index].from } : {})
        };
    };

module.exports = {
    getRandomQuote,
    getQuote
};
document.getElementById('quote').innerText = getRandomQuote.text;
