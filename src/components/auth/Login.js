import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/Auth";

export class Login extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);
