import React from "react";
import apiFacade from "../Facades/apiFacade";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const logout = () => {
    apiFacade.logout();
    props.changeLoginStatus("/");
  };

  return (
    <div className="navbar">
      <nav>
        <ul className="header">
          {props.loggedIn ? (
            <>
              <li>
                <Link exact="true" activeclassname="active" to="/admin">
                  Admin
                </Link>
              </li>

              <li style={{ float: "right" }}>
                <button style={{ color: "black" }} onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="tweakMarginRight" style={{ float: "right" }}>
              <Link activeclassname="active" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
