import React, { Component } from 'react';
import classes from './Signup.css';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  render() {
    return (

        <div className={classes.Container}>
          <div className={classes.SignupForm}>
            <h3>What's your story?</h3>
            <p>
                Create an account and tell everyone for free.
            </p>
            <button className={classes.GoogleButton}>
              <span>
                <span className={classes.GoogleSignupLogo}>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z" fill="#4285F4"></path>
                    <path d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z" fill="#34A853"></path>
                    <path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z" fill="#FBBC05"></path>
                    <path d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 3.96 7.95l3 2.34A5.36 5.36 0 0 1 12 6.58z" fill="#EA4335"></path>
                  </g>
                  </svg>
                </span>
                <span>Signup with Google</span>
              </span>
              
            </button>

            <button className={classes.EmailButton}>
              <span>
                <span className={classes.GoogleSignupLogo}>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </span>
                <span>Signup with Email</span>
              </span>
              
            </button>

            <p>
              Already have an account?
              <span> </span>
              <NavLink to="/login"> Login </NavLink>
            </p>
          </div>
        </div>
        
    );
  }

}

export default Login;
