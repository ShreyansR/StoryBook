import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
      super(props);

      this.state = {
        accountExists: true
      };

      this.newAccount = this.newAccount.bind(this);
  }


  newAccount() {
      this.setState({accountExists: !this.state.accountExists});
  }

  render(){
      if(this.state.accountExists){
        return (
          <div>
            <form>
              <h1>Log in!</h1>
              <div class="inputs">
                <label for="em"> Email: </label>
                <input type="email" id="em"/><br/>
                <label for="pass"> Password: </label>
                <input type="password" id="pass"/><br/>
                <input type="submit" value="log in"/>
              </div>
              <p onClick={this.newAccount}>Don't have an account? SIGN UP</p>

            </form>
          </div>
        )
      }
      else{
        return (
          <div>
            <form>
              <h1>Sign up!</h1>
              <div class="inputs">
                <label for="em"> Email: </label>
                <input type="email" id="em"/><br/>
                <label for="pass"> Password: </label>
                <input type="password" id="pass"/><br/>
                <input type="submit" value="log in"/>
              </div>
              <p onClick={this.newAccount}>Already have an account? LOG IN</p>

            </form>
          </div>
        )
      }
  }

}

export default Login;
