import React, { useState } from "react";


const GetUserInfo = () => {

    const getUsername = () => {
        const token = apiFacade.getToken();
        if (token != null) {
          const payloadBase64 = apiFacade.getToken().split(".")[1];
          const decodedClaims = JSON.parse(window.atob(payloadBase64));
          const username = decodedClaims.username;
          return username;
        } else return "";
      };
    
    const [userInfo, setUserInfo] = useState()


    

}