import React from "react";
import { InputBase, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

const Favorites = () => {

  const classes = useStyles();

  return (
    <Container className={classes.container}>
    <div className="favorites">
      <h1 style={{ color: "black" }}>Hej Favorites</h1>
    </div>
    </Container>
  );
};

export default Favorites;
