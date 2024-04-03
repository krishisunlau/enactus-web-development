// SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Access Your Profile:</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="signup-link">
        
        <Link to="/signup">
          <div className="signup-circle">Sign Up</div>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
