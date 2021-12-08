import React from "react";

export const Home = (props) => {
  return (
    <>
      {props.user && (
        <div className="home">
          <h4>Welcome {props.user.username}</h4>
          <p>Roles: {props.user.role}</p>
          <ul></ul>
        </div>
      )}
    </>
  );
};
