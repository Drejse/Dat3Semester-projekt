import { useState } from "react";
import { InputBase, makeStyles, Container } from "@material-ui/core";
import userFacade from "../Facades/UserFacade";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    alignItems: "center",
  },
}));
export const SignUp = () => {
  const initialValue = {
    userName: "",
    userPass: "",
    userAddress: "",
    userCity: "",
    userZip: "",
  };

  let history = useHistory();

  function navHome() {
    history.push("/");
  }

  const [signup, setSignup] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setSignup({ ...signup, [name]: value });
  };
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    userFacade.createUser(signup);

    navHome()
}

  return (
    <>
      <Container className={classes.container}>
        <div className="signup">
          <form onSubmit={handleSubmit}>
            <p>Username:</p>
            <input
              onChange={handleChange}
              name="userName"
              value={signup.userName}
              placeholder="username"
            ></input>

            <br />
            <p>Password:</p>
            <input
              onChange={handleChange}
              name="userPass"
              value={signup.userPass}
              placeholder="password"
            ></input>

            <br />
            <p>Address:</p>
            <input
              onChange={handleChange}
              name="userAddress"
              value={signup.userAddress}
              placeholder="address"
            ></input>

            <br />
            <p>City:</p>
            <input
              onChange={handleChange}
              name="userCity"
              value={signup.userCity}
              placeholder="cityInfo"
            ></input>

            <br />
            <p>ZipCode:</p>
            <input
              onChange={handleChange}
              name="userZip"
              value={signup.userZip}
              placeholder="zipcode"
            ></input>

            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
