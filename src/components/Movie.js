import React from "react";

const Movie = ({Title,Poster,Runtime,Year,Link}) => {
  return (
    <div className="movie">
      <a href={Link} target='_blank' rel="noreferrer" >
        <img src={Poster} alt="" /> </a>
      
      <p> {Title}</p>
      <p> {Year}</p>
      <p> {Runtime}</p>
    </div>
  );
};
// const Movie = (props) => {
//   return (
//     <div className="movie">
//       <img src={props.Poster} alt="" />
//       <p> {props.Title}</p>
//       <p> {props.Year}</p>
//       <p> {props.Runtime}</p>
//     </div>
//   );
// };

export default Movie;
  