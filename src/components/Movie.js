import React from "react";

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.Poster} alt="" />
      <p> {props.Title}</p>
      <p> {props.Year}</p>
      <p> {props.Runtime}</p>
    </div>
  );
};

export default Movie;
  