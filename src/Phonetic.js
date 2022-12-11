import React from "react";
import { Howl } from "howler";

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

  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <button onClick={soundPlay} className="btn btn-primary me-3">
          Listen
        </button>
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    if (props.phonetic.text) {
      return (
        <div className="Phonetic">
          <span>{props.phonetic.text}</span>
        </div>
      );
    } else {
      if (props.phonetic.audio) {
        return (
          <div className="Phonetic">
            <button onClick={soundPlay} className="btn btn-primary me-3">
              Listen
            </button>
          </div>
        );
      } else {
        return null;
      }
    }
  }
}
