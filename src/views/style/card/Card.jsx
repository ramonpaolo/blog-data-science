import React from "react";

import "./Card.css";

export default (props) => {
  return (
    <div className="card" key={props.id}>
      <h5>{props.name_project}</h5>
      <h6>Autor: {props.name_author}</h6>

      <div>
        <p>{props.describe}</p>
        <hr color="red" />
        <figure>
          {props.type_img1 === "svg" ? (
            <embed
              type="image/svg+xml"
              className="img-fluid img-border"
              src={props.img1}
            />
          ) : props.type_img1 === "png" ? (
            <img className="img-fluid img-border" src={props.img1} alt=" " />
          ) : (
            false
          )}
          {props.img_description1 !== "" ? (
            <figcaption className="figure-caption">
              <span>{props.img_description1}</span>
            </figcaption>
          ) : (
            false
          )}
        </figure>
      </div>

      <p id="content-card">{props.content}</p>

      {props.type_img2 === "svg" ? (
        <figure>
          <embed
            type="image/svg+xml"
            className="img-border img-thumbnail"
            src={props.img2}
          />{" "}
        </figure>
      ) : props.type_img2 === "png" ? (
        <figure>
          <img className="img-thumbnail img-border" src={props.img2} alt=" " />
        </figure>
      ) : (
        false
      )}
      {props.img_description2 !== "" ? (
        <figcaption className="figure-caption ">
          <span>{props.img_description2}</span>
        </figcaption>
      ) : (
        false
      )}
      <p>
        O código está no{" "}
        <a href={props.github}>
          <strong>Github</strong>
        </a>
      </p>
    </div>
  );
};
