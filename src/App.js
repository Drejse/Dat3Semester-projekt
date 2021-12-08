import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import apiFacade from "./Facades/apiFacade";
import { Home } from "./components/Home";
import LogIn from "./components/Login";
import Nav from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin";
import TopIdbm from "./components/TopImdb";
import Sidebar from "./components/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Favorites from "./components/Favorites";
import Movies from "./components/Movies";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  let history = useHistory();

  const changeLoginStatus = (pageToGo) => {
    setLoggedIn(!loggedIn);
    history.push(pageToGo);
  };

  useEffect(() => {
    setUser(apiFacade.getUser);
  }, [loggedIn, history]);

  return (
    <Router>
      <Nav
        loggedIn={loggedIn}
        user={user}
        changeLoginStatus={changeLoginStatus}
      />
      <Grid container>
        <Grid item sm={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={10}>
          <Route path="/movies" component={Movies} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/topidbm" exact component={TopIdbm} />
        </Grid>
      </Grid>

      <div>
        <Switch>
          <Route path="/" exact component={Home}>
            {loggedIn ? (
              <Home user={user} />
            ) : (
              <LogIn changeLoginStatus={changeLoginStatus} />
            )}
          </Route>

          <PrivateRoute
            path="/admin"
            loggedIn={loggedIn}
            user={user}
            component={Admin}
          />
          <Route path="/login">
            <LogIn changeLoginStatus={changeLoginStatus} />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
