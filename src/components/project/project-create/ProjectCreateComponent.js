import React, { Component } from "react";
import { Form, Button, Message, Dropdown } from "semantic-ui-react";
import InlineError from "../../../messages/InlineError";

class ProjectCreateComponent extends Component {
  state = {
    data: {
      id: this.props.project ? this.props.project.id : null,
      title: this.props.project ? this.props.project.title : "",
      description: this.props.project ? this.props.project.description : "",
      members: this.props.project ? this.props.project.members : []
    },
    loading: false,
    errors: {}
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.project) {
      this.setState({
        data: {
          id: nextProps.project.id,
          title: nextProps.project.title,
          description: nextProps.project.description
        }
      });
    }
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onMultiselectChange = (e, { value }) => {
    const members = value;
    this.setState({
      data: { ...this.state.data, members }
    });
  };

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
    if (!data.title) errors.title = "Project title shouldn't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    const users = this.props.users.length > 0 ? this.props.users : [];

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.error && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.error}</p>
          </Message>
        )}
        <Form.Field>
          <Form.Input
            type="text"
            id="title"
            name="title"
            placeholder="Project Title"
            value={data.title}
            onChange={this.onChange}
          />
          {errors.title && <InlineError text={errors.title} />}
        </Form.Field>
        <Form.Field>
          <Form.TextArea
            type="text"
            id="description"
            name="description"
            placeholder="Project Description"
            value={data.description}
            onChange={this.onChange}
          />
          {errors.description && <InlineError text={errors.description} />}
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder="Members"
            id="members"
            name="members"
            fluid
            multiple
            selection
            onChange={this.onMultiselectChange}
            options={users}
          />
        </Form.Field>

        <Form.Field>
          <Button primary> Save</Button>
        </Form.Field>
      </Form>
    );
  }
}

// ProjectCreateComponent.propTypes = {
//   submit: PropTypes.func.isRequired,
//   users: PropTypes.shape([]).isRequired,
//   project: PropTypes.shape({}).isRequired
// };

export default ProjectCreateComponent;
