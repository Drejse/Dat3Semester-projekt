import React from "react";
import AddArrangement from "../components/AddArrangement";
import apiFacade from "../Facades/apiFacade";


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
          <div >
            
            <AddArrangement movie={movie} />
          </div>
          <div
            onClick={() => props.handleFavoriteClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >

            <FavoriteComponent movie={movie}/>
          </div>
          
        </div>
      ))}
    </>
  );
};
