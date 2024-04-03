
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <div className="input-container">
          <input className="input-field" type="email" placeholder="Email" />
        </div>
        <div className="input-container">
          <input className="input-field" type="text" placeholder="First Name" />
        </div>
        <div className="input-container">
          <input className="input-field" type="text" placeholder="Last Name" />
        </div>
        <div className="input-container">
          <input className="input-field" type="password" placeholder="Password" />
        </div>
        <button type="submit">Submit</button>
        <div className="signup-link">
          <Link to="/signin">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

