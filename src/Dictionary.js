import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data.length);
    setResults(response.data[0]);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="text-center">
          <h1>Dictionary App</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              className="searchBar mb-2"
            />
            <div className="hint text-start ms-2 mb-2">
              Suggested words: sunset, wine, yoga, plant...
            </div>
            <input
              type="submit"
              value="Search"
              onSubmit={handleSubmit}
              className="searchButton"
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return (
      <div className="Dictionary">
        <h1>Dictionary App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a word"
            onChange={handleKeywordChange}
            className="searchBar mb-2"
          />
          <div className="hint text-start ms-2 mb-2">
            Suggested words: sunset, wine, yoga, plant...
          </div>
          <input
            type="submit"
            value="Search"
            onSubmit={handleSubmit}
            className="searchButton"
          />
        </form>
        <div className="text-center">
          <BounceLoader
            color="#9932cc"
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }
}
