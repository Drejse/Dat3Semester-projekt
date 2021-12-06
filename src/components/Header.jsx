import React, { useState } from "react";
//import apiFacade from "../Facades/apiFacade";
//import { Link } from "react-router-dom";
import { SearchBox } from "./SearchBox";
import { Toolbar, Typography, AppBar, InputBase,makeStyles } from "@material-ui/core";
import {Search} from '@material-ui/icons';
import { grey } from "@mui/material/colors";
//import { ClassNames } from "@emotion/react";
//import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#060b26',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: (grey,0.15),
    width: '40%',
    },
    input: {
      color: 'white',
      marginLeft: theme.spacing(1),
    }

  }))


const Nav = (props) => {
  /*
  const logout = () => {
    apiFacade.logout();
    props.changeLoginStatus("/");
  };
*/
const classes = useStyles();
  
  const [searchValue, setSearchValue] = useState("");

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          SMT
        </Typography>
          <div className={classes.search}>  
          <Search />
          <InputBase placeholder="Enter Keywords.." className={classes.input}/>
          </div>
        
          login
      </Toolbar>
    </AppBar>
  );
};
/*
<SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />*/
export default Nav;
