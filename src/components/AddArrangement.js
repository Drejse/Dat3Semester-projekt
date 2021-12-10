import { useState } from "react";

import userFacade from "../Facades/UserFacade";

//import SERVER_URL from "../constant";
//const URL = SERVER_URL;

const AddArrangement = (props) => {

  const [movieId] = useState(props.movie.imdbID);
  const [userName] = useState(userFacade.getUsername);

  const handelSubmit = (e) => {
    e.preventDefault();

    //setUsername(getUsername)
    const body = { movieId, userName };
    userFacade.addArrangement(body);
    console.log(movieId);
    console.log(userName);
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
