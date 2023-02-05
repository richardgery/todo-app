import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to="/login">Login page</Link>
        </li>
        <li>
          <Link to="/register">Register page</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
