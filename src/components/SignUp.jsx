import { useState } from "react";
import CreateUser from "./CreateUser";
import { InputBase, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
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

  const [signup, setSignup] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setSignup({ ...signup, [name]: value });
  };
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <div className="signup">
          <form onChange={handleChange}>
            <p>Username:</p>
            <input
              name="userName"
              value={signup.userName}
              placeholder="username"
            ></input>

            <br />
            <p>Password:</p>
            <input
              name="userPass"
              value={signup.userPass}
              placeholder="password"
            ></input>

            <br />
            <p>Address:</p>
            <input
              name="userAddress"
              value={signup.userAddress}
              placeholder="address"
            ></input>

            <br />
            <p>City:</p>
            <input
              name="userCity"
              value={signup.userCity}
              placeholder="cityInfo"
            ></input>

            <br />
            <p>ZipCode:</p>
            <input
              name="userZip"
              value={signup.userZip}
              placeholder="zipcode"
            ></input>

            <br />
            <CreateUser signup={signup} />
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
