import './App.css';
import Dictionary from "./Dictionary.js";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <p>
        This project was coded by Denisa Radevová and is open-sourced on <a href="https://github.com/radevden" target="_blank" rel="noopener noreferrer">GitHub</a> and hosted on Netlify</p>
        </footer>
    </div>
  );
}

export default App;
