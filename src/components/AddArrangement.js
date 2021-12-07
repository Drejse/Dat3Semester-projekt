import { useState } from "react";
import apiFacade from "../Facades/apiFacade";
import userFacade from "../Facades/UserFacade";
import SERVER_URL from "../constant";
const URL = SERVER_URL;

const AddArrangement = (props) => {
    

    
    const getUsername = () =>
    {
        const token = apiFacade.getToken()
        if (token != null)
        {
            const payloadBase64 = apiFacade.getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            const username = decodedClaims.username
            return username
        } else return ""
    }
    
    const [movieId] = useState(props.movie.imdbID);
    const [userName, setUsername] = useState(getUsername);

    const handelSubmit = (e) => {
        console.log(getUsername)
        e.preventDefault();

        //setUsername(getUsername)
        const body = { movieId, userName }
        userFacade.addArrangement(body);
        console.log(localStorage.getItem("jwtToken"))
        console.log(movieId);
        console.log(userName);

    }

    return (
        <div className="addArrangement">
            <form onSubmit={handelSubmit}>
                
                <button>Rent Movie</button>
            </form>
        </div>
    )
}

export default AddArrangement;