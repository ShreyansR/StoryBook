import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Login from './containers/Auth/frontPage/Login';
import Signup from './containers/Auth/frontPage/Signup';
import Portfolio from './containers/Portfolio/Portfolio';
import Pages from './containers/Portfolio/Pages';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Signup}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/pages" component={Pages} />

          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
