import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="definition">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <span>{definition.definition}</span>
              <br />
              <span className="example">{definition.example}</span>
            </div>
          );
        })}
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
