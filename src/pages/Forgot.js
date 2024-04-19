// Forgot.js

import React from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email to reset your password.</p>
      {/* Link to navigate to the home page */}
      <Link to="/home">Home</Link>
      <br />
      {/* Link to navigate to the sign in page */}
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
    </div>
  );
};

export default Forgot;
