import React from "react";
import { InputBase, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

const TopIdbm = () => {
  
  const classes = useStyles();

  return (
    <Container className={classes.container}>
    <div className="topidbm">
      <h1 style={{ color: "black" }}>Hej TopIdbm</h1>
    </div>
    </Container>
  );
};

export default TopIdbm;
