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
import Sidebar from "./components/Sidebar/Sidebar";
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

  let savedHistory = useHistory();

  const changeLoginStatus = (pageToGo) => {
    setLoggedIn(!loggedIn);
    savedHistory.push(pageToGo);
  };

  useEffect(() => {
    setUser(apiFacade.getUser);
  }, [loggedIn, savedHistory]);

  return (
    <Router>
      <Nav
        loggedIn={loggedIn}
        user={user}
        changeLoginStatus={changeLoginStatus}
      />
      <Sidebar />
      <div>
        <Switch>
          <Route path="/" exact component={Home}>
            {loggedIn ? (
              <Home user={user} />
            ) : (
              <LogIn changeLoginStatus={changeLoginStatus} />
            )}
          </Route>

          <Route path="/movies" component={Movies} />

          <Route path="/favorites" exact component={Favorites} />
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
