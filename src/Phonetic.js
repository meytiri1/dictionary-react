import React from "react";
import { Howl } from "howler";
import "./Phonetics.css";

export default function Phonetic(props) {
  function soundPlay() {
    const sound = new Howl({
      src: props.phonetic.audio,
      html5: true,
      autoplay: false,
      loop: false,
      volume: 1,
    });
    sound.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <button onClick={soundPlay} className="btn mb-2 me-4">
          Listen
        </button>
        <span className="my-auto">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <button onClick={soundPlay} className="noAudioBtn mb-2 btn me-4">
          Listen
        </button>
        <span className="my-auto">{props.phonetic.text}</span>
      </div>
    );
  }
}
