$(document).ready(function() {
console.log("Motivatie.js en Jquery doen het"); // Debugging regel

console.log(typeof jQuery); // debugging regel

function App() {
  return <h1>Hallo, React werkt op een statische pagina!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
});
