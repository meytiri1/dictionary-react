import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000123e6b8902d6d43ffb241d4e62c35627b";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
              className="searchBar mb-1"
            />
            <div className="hint text-start ms-1 mb-2">
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
        <Photos photos={photos} />
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
        <section className="text-center">
          <BounceLoader
            color="#9932cc"
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </section>
      </div>
    );
  }
}
