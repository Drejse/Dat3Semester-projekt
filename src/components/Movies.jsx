import React, { useState, useEffect } from "react";
import { MovieList } from "../movieComponents/MovieList";
import { MovieListHeading } from "./MovieListHeading";
import { AddFavorites } from "./AddFavorites";
import { InputBase, makeStyles, Container } from "@material-ui/core";
import { Search } from "@material-ui/icons";
//import {Grid} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: ("#696969", 0.15),
    width: "100%",
  },
  input: {
    color: "#99999",
    marginLeft: theme.spacing(1),
  },
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className="movies">
        <MovieListHeading heading="Movies" />
        <div className={classes.search}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <InputBase
            placeholder="Enter Keywords.."
            className={classes.input}
            /*value={props.value}*/
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>

        <div className="row m-2">
          <MovieList
            movies={movies}
            handleFavoriteClick={addFavoriteMovie}
            favoriteComponent={AddFavorites}
          />
        </div>
      </div>
    </Container>
  );
};

export default Movies;
