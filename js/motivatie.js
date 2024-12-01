const quotes = require('inspirational-quotes');

const randomQuote = quotes.getRandomQuote();
console.log(Quote.getRandomQuote()); // return any random quote

/*
console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author

const randomQuote = quotes.getRandomQuote();
console.log(randomQuote);

document.getElementById('quote').innerText = randomQuote.text;
*/