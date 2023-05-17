
import Escena from "./components/escena/Escena";
import Frases from "./data/Frases"

import { RequadreFrases } from "./styled";

function App() {
return (
<div>
  <RequadreFrases><Escena frase = {Frases[0]} /></RequadreFrases>
  <RequadreFrases><Escena frase = {Frases[1]} /></RequadreFrases>
  <RequadreFrases><Escena frase = {Frases[2]} /></RequadreFrases>
  <RequadreFrases><Escena frase = {Frases[3]} /></RequadreFrases>
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