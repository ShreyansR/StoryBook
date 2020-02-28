import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Login from './containers/Auth/frontPage/Login';
import Logout from './containers/Auth/Logout';
import Signup from './containers/Auth/frontPage/Signup';
import firebase from 'firebase';
import {fireB, base} from './firebase-config';
import {Spinner, Button} from '@blueprintjs/core';
import * as ROUTES from './constants/routes';

class App extends Component {
  constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.state={ 
      isSignedIn:false, 
      loading: true,
      currentUser:null,
      setLoggedIn: false
    };
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user, 
        isSignedIn: true
      })
    }
    else {
      this.state({
        currentUser: null,
        isSignedIn: false
      })
    }
  }



  componentWillMount() {
    this.removeAuthListener = fireB.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log(this.state.isSignedIn);
        this.setState({
          isSignedIn: true,
          currentUser: user,
          loading: false
        });
      }
      else {
        console.log(this.state);
        this.setState({
          isSignedIn: false,
          currentUser: null,
          loading: false
        });
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fireB.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({isSignedIn: true});
      }
      else {
        this.setState({isSignedIn: false});
      }
    });
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div style={{textAlign: "center", position: "absolute", top:"25%", left: "50%"}}>
          <h3> Loading</h3>
          <Spinner />
        </div>
      )
    }
    return (
      <div>
        {this.state.isSignedIn ? (
          <div>Signed In!
            <Button onClick={()=>fireB.auth().signOut()}>Sign Out</Button>
          </div>
          
        ) : (
          <Layout>
            <Switch>
              <Route path={ROUTES.LANDING} exact component={Signup}/>
              <Route path={ROUTES.LOG_OUT} component={Logout} />
              <Route path={ROUTES.LOG_IN} component={Login} />
              <Route path={ROUTES.SIGN_UP} component={Signup} />

            </Switch>
          </Layout>
        )
      }
        
      </div>
    );
  }
}

export default App;
