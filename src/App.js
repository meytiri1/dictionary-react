import logo from "./images/logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";
import background from "./images/background3.jpg";

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
};

function App() {
  return (
    <div className="App" style={styles.container}>
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
