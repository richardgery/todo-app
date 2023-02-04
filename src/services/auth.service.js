import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

// register() function works for POST request (username, email, password) to API_URL
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

// login() function works for POST request (username, password) & save JWT to Local Storage
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// logout() function works for remove JWT from local storage
const logout = () => {
  localStorage.removeItem("user");
};

export { register, login, logout };
