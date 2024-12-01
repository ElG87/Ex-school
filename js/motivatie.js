const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send('Welkom bij onze blog!');
});

app.listen(5500, ()=>{
    console.log('Server draait op port 3000');
});

const quotes = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote

const randomQuote = quotes.getRandomQuote();
console.log(randomQuote);

