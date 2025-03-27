import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import quotes from './motiv-quotes.json';

function MotivationalQuotesApp() {
    const [quote, setQuote] = useState(quotes[0]);

    const generateNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Motivational Quotes</h2>
            <p style={{ fontStyle: 'italic', fontSize: '1.2em' }}>{quote}</p>
            <button onClick={generateNewQuote} style={{ padding: '10px 20px', fontSize: '1em' }}>
                Get New Quote
            </button>
        </div>
    );
}

ReactDOM.render(<MotivationalQuotesApp />, document.getElementById('react-root'));