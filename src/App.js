import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://bright-centaur-7034e8.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </a>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">Coded by Michelle Köhler</footer>
    </div>
  );
}

export default App;
