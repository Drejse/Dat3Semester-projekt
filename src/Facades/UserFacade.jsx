/* eslint-disable no-unused-vars */
import SERVER_URL from "../constant";
const URL = SERVER_URL;

function addArrangement(movie) {
  const options = makeOptions("POST", movie);
  return fetch(URL + "/api/user/addarrangement", options).then;
}

const makeOptions = (method, body) => {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };

  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};
