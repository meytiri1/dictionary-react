import logo from "./images/logo.svg";
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
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        Coded by{" "}
        <a
          href="https://github.com/meytiri1/dictionary-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          Michelle Köhler
        </a>
      </footer>
    </div>
  );
}

export default App;
