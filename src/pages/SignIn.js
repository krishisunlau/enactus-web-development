import React, { useEffect } from 'react';

const SignIn = () => {
    useEffect(() => {
        document.body.classList.add('signin-page');
        return () => {
            document.body.classList.remove('signin-page');
        };
    }, []);

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <div className="input-container">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-container">
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Sign In</button>
        </div>
    );
};

export default SignIn;
