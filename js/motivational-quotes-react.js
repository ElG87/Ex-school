import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import quotes from './motivatie-quotes.json'; // Import the local JSON file

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function MotivationalQuotesApp() {
    const [quote, setQuote] = useState(quotes[0]); // Get an initial quote

    const generateNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]); // Fetch a new random quote
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Even geen zin of motivatie nodig? Dan ben je hier op de goede plek!</h2>
            <p> Klik hieronder.</p>
            <p style={{ fontStyle: 'italic', fontSize: '1.2em' }}>{quote}</p>
            <button onClick={generateNewQuote} style={{ padding: '10px 20px', fontSize: '1em' }}>
                Klik hier voor een nieuwe quote!  </button>
        </div>
    );
}

ReactDOM.render(<MotivationalQuotesApp />, document.getElementById('react-root'));