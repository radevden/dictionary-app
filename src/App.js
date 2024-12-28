import './App.css';
import Dictionary from "./Dictionary.js";
import axios from "axios"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Dictionary</p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <hr/>
        Created by <a href="https://github.com/radevden" target="_blank">Denisa Radevová</a>
        </footer>
    </div>
  );
}

export default App;
