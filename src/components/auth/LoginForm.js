import React, { Component } from "react";
import Validator from "validator";
import PropTypes from "prop-types";
import {
  Form,
  Button,
  Message,
  Grid,
  Segment,
  Header,
  Image
} from "semantic-ui-react";

import InlineError from "../../messages/InlineError";

class LoginForm extends Component {
  state = {
    data: {
      username: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(err => {
        this.setState({ errors: err.response.data, loading: false });
      });
    }
  };

  validate = data => {
    const errors = {};

    if (!Validator.isEmail(data.username)) errors.username = "Invalid Email";
    if (!data.password) errors.password = "Can't be blank";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form onSubmit={this.onSubmit} loading={loading}>
            <Segment stacked>
              {errors.error && (
                <Message negative>
                  <Message.Header>Something went wrong</Message.Header>
                  <p>{errors.error}</p>
                </Message>
              )}
              <Header as="h2" color="teal" textAlign="center">
                <Image src="/logo.png" /> Log-in to your account
              </Header>
              <Form.Field error={!!errors.username} loading={loading}>
                <Form.Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={data.username}
                  onChange={this.onChange}
                />
                {errors.username && <InlineError text={errors.username} />}
              </Form.Field>
              <Form.Field error={!!errors.password}>
                <Form.Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password} />}
              </Form.Field>
              <Button color="teal" fluid size="large">
                {" "}
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
