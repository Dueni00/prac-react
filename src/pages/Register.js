import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>Create an account</p>
      {/* Link to navigate to the forgot password page */}
      <Link to="/forgot">Forgot Password?</Link>
      <br />
      {/* Link to navigate to the sign in page */}
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default Register;
