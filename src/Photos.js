import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos pb-3">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-6 col-md-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer noopener"
                  link={photo.alt}
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
