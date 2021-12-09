import React from "react";
import GetArrangements from "./GetArrangements";
import {makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

const Profile = () => {

  const classes = useStyles();

  return (
    
    <Container className={classes.container}>

    <div className="profile">
      
      {
        <table class="table">
          <thead>
            <th>Id</th>
            <th>Movie Id</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Price</th>
            <th>Status</th>
          </thead>
          <tbody>
            <GetArrangements/>
          </tbody>
        </table>
      }

    </div>
    </Container>
  );
};

export default Profile;