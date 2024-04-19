import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Home;
