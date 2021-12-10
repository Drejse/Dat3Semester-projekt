import React, { useEffect, useState } from "react";
import userFacade from "../Facades/UserFacade";
import apiFacade from "../Facades/apiFacade";
import { InputBase, makeStyles, Container } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));

const GetUserInfo = () => {



  const classes = useStyles();

    const getUsername = () => {
        const token = apiFacade.getToken();
        if (token != null) {
          const payloadBase64 = apiFacade.getToken().split(".")[1];
          const decodedClaims = JSON.parse(window.atob(payloadBase64));
          const username = decodedClaims.username;
          return username;
        } else return "";
      };

      const [userName] = useState(getUsername)
      const [userInfo, setUserInfo] = useState()

      

      useEffect(() => {
        userFacade.getUserInfo(userName)
        .then((res) => setUserInfo((res)))
      }, )

    

      console.log("username" + userName)
      console.log(JSON.stringify(userInfo))
      
      return (
        <Container className={classes.container}>
        <>
          <h3>Profile</h3>
          Username: {userInfo && userInfo.userName}
          <br/>
          Balance: {userInfo && userInfo.userBalance}
          <br/>
          <h5>Address</h5>
          Address: {userInfo && userInfo.userAddress}<br/>
          City: {userInfo && userInfo.userCity}<br/>
          Zipcode: {userInfo && userInfo.userZip}<br/>
          <h5>Billing Information</h5>
          

        </>
        </Container>
      )
}
export default GetUserInfo