import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState({ noData: false });

  function handleResponse(response) {
    console.log(response.data.length);
    setResults(response.data[0]);
    if (!response.data.length) {
      setError({ noData: true });
    }
    console.log(error);
  }

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (error.noData) {
    return (
      <div className="Dictionary">
        <h1>Dictionary App</h1>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
          <input type="submit" value="Search" onSubmit={search} />
          <p>Hello world</p>
        </form>
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <section className="text-center">
          <h1>Dictionary App</h1>
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Type a word"
              onChange={handleKeywordChange}
              className="searchBar"
            />
            <input
              type="submit"
              value="Search"
              onSubmit={search}
              className="searchButton"
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  }
}
