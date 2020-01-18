import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Button, Message, Dropdown } from "semantic-ui-react";
import { fetchMasters } from "../../../actions/MasterAction";
import InlineError from "../../../messages/InlineError";

class TaskCreate extends Component {
  state = {
    data: {
      project_id: this.props.project ? this.props.project.id : null,
      task_type: null,
      task_priority: null,
      title: "",
      description: ""
    },
    loading: false,
    errors: {}
  };

  componentDidMount() {
    this.props.fetchMasters("master?listing=task-type,task-priority");
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     masters: nextProps.masters
  //   });
  // }

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
      <Form loading={loading}>
        <Form.Field>
          <Dropdown
            placeholder="Task Type"
            id="task_type"
            name="task_type"
            fluid
            selection
            options={taskType}
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
          />
          {errors.task_priority && <InlineError text={errors.task_priority} />}
        </Form.Field>
        <Form.Field>
          <Form.Input
            type="text"
            id="title"
            name="title"
            placeholder="Task Title"
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
  masters: PropTypes.shape([]).isRequired
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

export default connect(mapStateToProps, { fetchMasters })(TaskCreate);
