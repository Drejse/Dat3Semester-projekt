import { useState } from "react";
import apiFacade from "../Facades/apiFacade";
import userFacade from "../Facades/UserFacade";

const CreateUser = (props) => {

    const [body] = useState(props)  

    const handelSubmit = (e) => {
        e.preventDefault();

        userFacade.createUser(body);
    }

    return (
        <div className="createUser">
            <form onSubmit={handelSubmit}>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default CreateUser;