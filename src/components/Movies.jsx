import React, { useState, useEffect } from "react";
import { MovieList } from "../movieComponents/MovieList";

import { MovieListHeading } from "./MovieListHeading";
import { AddFavorites } from "./AddFavorites";
import RemoveFavorites from "./RemoveFavorites";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c31fede9`;
    console.log(url);
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  return (
    <div className="movies">
      <h4>MOVIES</h4>
      
      <div className="container-fluid movie-app col col-sm">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          
        </div>
        <div className=" d-flex justify-content-center row  col-lg-12">
          <MovieList
            movies={movies}
            handleFavoriteClick={addFavoriteMovie}
            favoriteComponent={AddFavorites}
          />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Favorites" />
        </div>
        <div className="row">
          <MovieList
            movies={favorites}
            handleFavoriteClick={removeFavoriteMovie}
            favoriteComponent={RemoveFavorites}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
