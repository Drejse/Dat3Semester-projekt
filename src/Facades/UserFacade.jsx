/* eslint-disable no-unused-vars */
import SERVER_URL from "../constant";
const URL = SERVER_URL;

function addArrangement(body) {
  const options = makeOptions("POST", body);
  return fetch(URL + "/api/user/addarrangement", options).then(
    (res) => handleHttpErrors
  );
}

function createUser(body) {
  const options = makeOptions("POST", body);
  return fetch(URL + "/adduser", options).then((res) => handleHttpErrors);
}

function makeOptions(method, body) {
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
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const userFacade = {
  addArrangement,
  createUser,
};

export default userFacade;
