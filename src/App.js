import React, {Component}from "react";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import DashLayout from './hoc/Layout/DashLayout';
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/Logout';
import Dashboard from './containers/Dashboard/Dashboard';
import Portfolio from './containers/Portfolio/Portfolio';
import Pages from './containers/Pages/Pages';
import Flipbook from './containers/Pages/Flipbook'
import Signup from './containers/Auth/Signup/Signup';
import {fireB} from './firebase-config';
import Spinner from './components/UI/Spinner/Spinner';
import * as ROUTES from './constants/routes';

import "./App.css";

import { createBrowserHistory as createHistory } from "history";
import Editor from "./containers/Editor/Editor";
const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.pesdk = React.createRef();
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.state={ 
      isSignedIn:false, 
      loading: true,
      currentUser:null,
      setLoggedIn: false,
      reloaded: false
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
          <Layout isSignedIn={this.state.isSignedIn}>
            <Switch>
              <Route path={ROUTES.LANDING} exact component={Portfolio}/>
              <Route path="/editor" exact component={Editor}
              />
              <Route path={ROUTES.DASHBOARD} exact component={Portfolio}/>
              <Route path={ROUTES.PAGES} exact component={Pages}/>
              <Route path={ROUTES.FLIPBOOK} exact component={Flipbook} />

            </Switch>
          </Layout>

        ) : (
          <Layout isSignedIn={this.state.isSignedIn}>
            <Switch>
              <Route path={ROUTES.LANDING} exact component={Signup}/>
              <Route path={ROUTES.LOG_OUT} component={Logout} />
              <Route path={ROUTES.LOG_IN} component={Login} />
              <Route path={ROUTES.SIGN_UP} component={Signup} />
              <Route path={ROUTES.PORTFOLIO} component={Portfolio} />
              <Route path={ROUTES.PAGES} component={Pages} />
              <Route path={ROUTES.FLIPBOOK} component={Flipbook} />

            </Switch>
          </Layout>
        )
      }
        
      </div>
    );
  }
}

export default App;