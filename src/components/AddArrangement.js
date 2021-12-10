import { useState } from "react";
import { useHistory } from "react-router-dom";
import apiFacade from "../Facades/apiFacade";

import userFacade from "../Facades/UserFacade";

//import SERVER_URL from "../constant";
//const URL = SERVER_URL;

const AddArrangement = (props) => {

  let history = useHistory();

  function navHome() {
    history.push("/");
  }

  const [movieId] = useState(props.movie.imdbID);
  const [userName] = useState(userFacade.getUsername);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userName)
    if (userName === "") {
      console.log("jeg sender ingen data")
       navHome()
    } else {
      console.log(userName)
      console.log("jeg sender data")
      const body = { movieId, userName };
      userFacade.addArrangement(body);
      }

    //setUsername(getUsername)
    
  };

  return (

    
    <div className="addArrangement">
      <form onSubmit={handelSubmit}>
        <button>Rent</button>
      </form>
    </div>
  );
};

export default AddArrangement;
