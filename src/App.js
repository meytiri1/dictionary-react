import logo from "./images/logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";
import background from "./images/background3.jpg";

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "top",
    backgroundSize: "100vw",
    backgroundRepeat: "repeat-y",
    minHeight: "100vh",
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
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        This project was coded by{" "}
        <a
          href="https://bright-centaur-7034e8.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Michelle Köhler
        </a>{" "}
        and
        <br />
        is{" "}
        <a
          href="https://github.com/meytiri1/dictionary-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          open-sourced on GitHub{" "}
        </a>
        and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
