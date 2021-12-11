import React, { useEffect, useState } from "react";
import { MovieList } from "../movieComponents/MovieList";
import RemoveFavorites from "./RemoveFavorites";
import { InputBase, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

const Favorites = () => {

  const classes = useStyles();


  const [favioriteList, setFavoriteList] = useState([])

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favioriteList.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavoriteList(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const movieKey = localStorage.getItem("react-movie-app-favourites")

  useEffect(() => {
    const movieList = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieList != null) {
      setFavoriteList(movieList)
    }
  }, []);

  console.log(movieKey)
  console.log(favioriteList)


  
  return (
    <Container className={classes.container}>
    <div className="favorites">
      <h1 style={{ color: "black" }}>Favorites</h1>
      <div className="row m-2">
      <MovieList 
      movies={favioriteList}
      handleFavoriteClick={removeFavoriteMovie}
      favoriteComponent={RemoveFavorites}
      />
      </div>
    </div>
    </Container>
  );
};

export default Favorites;
