import React, { Component } from "react";
import LoginForm from "./LoginForm";

export class Login extends Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default Login;
