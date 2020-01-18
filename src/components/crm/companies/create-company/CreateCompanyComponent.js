import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import InlineError from "../../../../messages/InlineError";

class CreateCompanyComponent extends Component {
  state = {
    data: {
      name: ""
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
        // console.log(err);
        this.setState({ errors: err.response.data, loading: false });
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!data.name) errors.name = "Can't be blank";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.error && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.error}</p>
          </Message>
        )}
        <Form.Field>
          <label htmlFor="name">Name</label>
          <Form.Input
            type="text"
            id="name"
            name="name"
            placeholder="company name"
            value={data.name}
            onChange={this.onChange}
          />
          {errors.name && <InlineError text={errors.name} />}
        </Form.Field>
        <Button primary> Save</Button>
      </Form>
    );
  }
}

CreateCompanyComponent.propTypes = {
  submit: PropTypes.func.isRequired
};

export default CreateCompanyComponent;
