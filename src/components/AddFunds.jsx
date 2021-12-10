import { useState } from "react";
import apiFacade from "../Facades/apiFacade";
import userFacade from "../Facades/UserFacade";
import {makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      alignItems: "center",
    },
  }));

  export const AddFunds = (props) => {

    const classes = useStyles();

    const init = 0;
    const [userBalance, setUserBalance] = useState("")
    const [userName] = useState(userFacade.getUsername)
    
    

    const handleChange = (event) => {
        setUserBalance( event.target.value );  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { userName, userBalance}
        userFacade.addFunds(body)

        setUserBalance(init);
    }

    

    return (
        <>
            <Container className={classes.container}>
                <div className="addfunds">
                    <form onSubmit={handleSubmit}>
                        <input type="number" onChange={handleChange} value={userBalance.value} placeholder="add funds??"></input>
                        <button type="submit">add funds</button>
                    </form>
                </div>
            </Container>
        </>
    )
  }