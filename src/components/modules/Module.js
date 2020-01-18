import React, { Component } from "react";
// import Validator from "validator";
import PropTypes from "prop-types";
import { Form, Button, Message, Segment } from "semantic-ui-react";

import InlineError from "../../messages/InlineError";

class Module extends Component {
  state = {
    data: {
      module: ""
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

    // if (Object.keys(errors).length === 0) {
    //   this.setState({ loading: true });
    //   // this.props.submit(this.state.data).catch(err => {
    //   //   this.setState({ errors: err.response.data, loading: false });
    //   // });
    // }
  };

  validate = data => {
    const errors = {};
    if (!data.module) errors.module = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Segment stacked>
          {errors.error && (
            <Message negative>
              <Message.Header>Something went wrong</Message.Header>
              <p>{errors.error}</p>
            </Message>
          )}
          <div className="ui grid">
            <div className="row">
              <div className="eleven wide column">
                <Form.Field error={!!errors.module} loading={loading}>
                  <Form.Input
                    type="text"
                    id="module"
                    name="module"
                    placeholder="Enter Module Name"
                    value={data.module}
                    onChange={this.onChange}
                  />
                  {errors.module && <InlineError text={errors.module} />}
                </Form.Field>
              </div>
              <div className="five wide column">
                <Button primary>Submit</Button>
              </div>
            </div>
          </div>
        </Segment>
      </Form>
    );
  }
}

Module.propsTypes = {
  submit: PropTypes.func.isRequired
};

export default Module;
