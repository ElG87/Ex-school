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

    const Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote

document.getElementById('quote').innerText = randomQuote.text;

return (
    <div>
      <h2>Inspirerende uitspraken</h2>
      <p>druk op de knop voor een nieuwe inspirerende uitspraak.</p>
      <div>{postQuote}</div>
      <button id='quotebtn' onClick={refreshPage}>Nieuwe quote</button>

    </div>
  );