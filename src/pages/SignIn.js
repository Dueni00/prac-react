import React from "react";
import { Link } from "react-router-dom";

export default function SignIn({ includeForgotButton }) {
  return (
    <div>
      <h1>Sign In Page</h1>
      {includeForgotButton && (
        <Link to="/forgot">
          <button>Forgot Password?</button>
        </Link>
      )}
    </div>
  );
}
