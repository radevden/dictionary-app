import './App.css';
import Dictionary from "./Dictionary.js";

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
        Created by <a href="https://github.com/radevden" target="_blank" rel="noopener noreferrer">Denisa Radevová</a>
        </footer>
    </div>
  );
}

export default App;
