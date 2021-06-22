import React from 'react';
import ReactDOM from 'react-dom';


import './index.scss';
import App from './App';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
    render() {
      return (
        <div className="container">
          <div className="box-one"></div>
          <div className="box-two">
            <div>
              <h1>Login</h1>
              <h2>
                Don't have an account? 
                <a href={"#"}>Sign up now.</a>
              </h2>
              <div>
                <form>
                  <input type={"email"} />
                  <span className="span-1">email</span>
                  <input type={"password"} />
                  <span className="span-2">password</span>
                  <button type={"button"}>LOGIN</button>
                </form>
              </div>
  
              <a href={"#"}>Forgot Password?</a>
  
              <div className={"divider"}>
                <span>Or</span>
              </div>
  
              <h3>Login in with:</h3>
  
              <a href={"#"} className={"fa fa-facebook"}></a>
              <a href={"#"} className={"fa fa-twitter"}></a>
              <a href={"#"} className={"fa fa-google"}></a>
              <a href={"#"} className={"fa fa-linkedin"}></a>
            </div>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Login />, document.getElementById("root"));

