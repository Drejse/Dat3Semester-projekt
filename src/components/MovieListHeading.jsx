import React from "react";
import {Grid} from '@mui/material';


export const MovieListHeading = (props) => {
  return (
    <Grid container spacing={2}>
        <Grid item sm={8}>
          <h1>{props.heading}</h1>
        </Grid>
    </Grid>
    
  );
};
