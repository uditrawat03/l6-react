import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Button, Message, Dropdown } from "semantic-ui-react";
import { fetchMasters } from "../../../actions/MasterAction";
import { saveTask } from "../../../actions/TaskAction";
import InlineError from "../../../messages/InlineError";

class TaskCreate extends Component {
  state = {
    data: {
      project_id: this.props.project ? this.props.project.id : null,
      task_type: null,
      task_priority: null,
      summary: "",
      description: ""
    },
    loading: false,
    errors: {}
  };

  componentDidMount() {
    this.props.fetchMasters("master?listing=task-type,task-priority");
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: {
        ...this.state.data,
        project_id: nextProps.project ? nextProps.project.id : null
      }
    });
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSelect = (e, { name, value }) => {
    this.setState({
      data: { ...this.state.data, [name]: value }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.saveTask(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!data.summary) errors.summary = "Task Summary shouldn't be blank";
    if (!data.task_type) errors.task_type = "Please select task type";
    if (!data.task_priority)
      errors.task_priority = "Please select task priority";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    const taskType = this.props.masters.taskType
      ? this.props.masters.taskType.map(item => {
          return { key: item.id, text: item.name, value: item.id };
        })
      : [];

    const taskPriority = this.props.masters.taskPriority
      ? this.props.masters.taskPriority.map(item => {
          return { key: item.id, text: item.name, value: item.id };
        })
      : [];

    const form = (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field>
          <Dropdown
            placeholder="Task Type"
            id="task_type"
            name="task_type"
            fluid
            selection
            options={taskType}
            onChange={this.onSelect}
          />
          {errors.task_type && <InlineError text={errors.task_type} />}
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder="Task Priority"
            id="task_priority"
            name="task_priority"
            fluid
            selection
            options={taskPriority}
            onChange={this.onSelect}
          />
          {errors.task_priority && <InlineError text={errors.task_priority} />}
        </Form.Field>
        <Form.Field>
          <Form.Input
            type="text"
            id="summary"
            name="summary"
            placeholder="Summary"
            value={data.title}
            onChange={this.onChange}
          />
          {errors.summary && <InlineError text={errors.summary} />}
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
          <Button primary>Create</Button>
        </Form.Field>
      </Form>
    );

    return (
      <div>
        <h1>Task Create</h1>
        <h2>
          Project Name: {this.props.project ? this.props.project.title : ""}
        </h2>
        {form}
      </div>
    );
  }
}

TaskCreate.propTypes = {
  fetchMasters: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  masters: PropTypes.shape([]).isRequired,
  project: PropTypes.shape({}).isRequired
};

function mapStateToProps(state, props) {
  let project = null;
  if (props.match.params.project_id) {
    project = state.projects.find(item => {
      return item.id === parseInt(props.match.params.project_id);
    });
  }
  return {
    project,
    masters: state.masters
  };
}

export default connect(mapStateToProps, { fetchMasters, saveTask })(TaskCreate);
