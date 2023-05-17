
import Escena from "./components/escena/Escena";
import Frases from "./data/Frases"

function App() {
return (
<div>
<Escena frase = {Frases[0]} />
<Escena frase = {Frases[1]} />
<Escena frase = {Frases[2]} />
<Escena frase = {Frases[3]} />
</div>
)
}

export default App;









/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */