import React, { Component } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

import { Redirect } from 'react-router-dom'
//import { Toaster, Intent } from '@blueprintjs/core'
import {fireB, googleProvider, fstore } from '../../../firebase-config'


class Login extends Component {

  constructor(props) {
    super(props);
    this.authWithGoogle = this.authWithGoogle.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
    this.state = {
      redirect: false
    }
  }

  authWithGoogle() {
    fireB.auth().signInWithPopup(googleProvider)
      .then((result, error) => {
        if (error) {
          alert("Incorrect Credentials");
        }
        else {
          this.setState({redirect: true});
          console.log("The current ID: " + fireB.auth().currentUser.uid)
          //check if the user has an entry in the firestore portfolio database
          const usersRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid)
          usersRef.get().then((docSnapshot) => {
            if(docSnapshot.exists){
              //do nothing
            }
            else{
              //create their portfolio in the firestore database
              fstore.collection("Users").doc(fireB.auth().currentUser.uid).set({
              })
              fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").add({default: true})
            }
          })
        }
      })
  }

  authWithEmailPassword(event) {
    event.preventDefault();
    fireB.auth().signInWithEmailAndPassword(this.emailInput.value, this.passwordInput.value);
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }

    return (

        <div className={"LoginContainer"}>
          <div className={"LoginForm"}>
            <h3>Log in to your account</h3>
            <br></br>
            <button onClick={() => {this.authWithGoogle()}} className={"LoginGoogleButton"}>
              <span>
                <span className={"GoogleLoginLogo"}>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z" fill="#4285F4"></path>
                    <path d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z" fill="#34A853"></path>
                    <path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z" fill="#FBBC05"></path>
                    <path d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 3.96 7.95l3 2.34A5.36 5.36 0 0 1 12 6.58z" fill="#EA4335"></path>
                  </g>
                  </svg>
                </span>
                <span>Log in with Google</span>
              </span>
              
            </button>

            <svg xmlns="http://www.w3.org/2000/svg" width="344" height="30" viewBox="0 0 344 14">
              <g id="Group_11" data-name="Group 11" className={"Logincls1"} transform="translate(-212.5 -421)">
                <line id="Line_1" data-name="Line 1" className={"Logincls2"} x2="344" transform="translate(212.5 428.5)"/>
                <rect id="Rectangle_5" data-name="Rectangle 5" className={"Logincls3"} width="18" height="13" transform="translate(377 422)"/>
                <text id="OR" className={"Logincls4"} transform="translate(380 431)"><tspan x="0" y="0">OR</tspan></text>
              </g>
            </svg>

            <form onSubmit={(event) => {this.authWithEmailPassword(event) }} ref={(form) => {this.loginForm = form}}>
              <input ref={(input) => {this.emailInput = input}} type="email" className="loginEmail"  placeholder="Email"/>

              <input ref={(input) => {this.passwordInput = input}} type="password" className="loginPassword" placeholder="Password"/>

              <button className={"LoginFormButton"} type="submit">
                <span>
                  Log in
                </span>
              </button>
            </form>
            <br></br>
            <p>
              Don't have an account?
              <span> </span>
              <NavLink to="/signup">Signup </NavLink>
            </p>
          </div>
        </div>
        
    );
  }

}

export default Login;
