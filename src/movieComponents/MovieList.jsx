import React from "react";
import AddArrangement from "../components/AddArrangement";


export const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;

  return (
    <>
      
      {props.movies.map((movie, index) => (
          
        <div
          className=" image-container d-flex justify-content-start mt-5"
          style={{ width: "200px" }}
        >
          <img
            className="card-img"
            key={index}
            src={movie.Poster}
            alt="movie"
          ></img>
          
          <div
            onClick={() => props.handleFavoriteClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >

            <FavoriteComponent movie={movie}/>
          </div>
<div className="overlayRent d-flex align-items-center justify-content-center">

            <AddArrangement movie={movie} />
          </div>
        </div>
      ))}
    </>
  );
};
