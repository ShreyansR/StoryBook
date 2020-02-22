import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';



import Layout from './hoc/Layout/Layout';
import Login from './containers/Auth/frontPage/Login';
import Signup from './containers/Auth/frontPage/Signup';



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Signup}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
