import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  saveProject,
  fetchProject,
  updateProject
} from "../../../actions/ProjectAction";
import ProejctCreateComponent from "./ProjectCreateComponent";
import api from "../../../services/api";

class ProjectCreate extends Component {
  state = {
    users: {},
    project: this.props.project ? this.props.project : null
  };

  componentDidMount() {
    api.service.get("master?listing=users").then(data => {
      let users = [];
      data.users.forEach(item => {
        users.push({
          key: item.id,
          text: item.name,
          value: item.id
        });
      });
      this.setState({ users });
    });

    if (this.props.match.params.id) {
      this.props.fetchProject(this.props.match.params.id);
    }
  }

  submit = data => {
    if (this.props.project.id) {
      return this.props.updateProject(data).then(() => {
        this.props.history.push("/");
      });
    } else {
      return this.props.saveProject(data).then(() => {
        this.props.history.push("/");
      });
    }
  };

  render() {
    return (
      <ProejctCreateComponent
        users={this.state.users}
        submit={this.submit}
        project={this.props.project}
      />
    );
  }
}

ProjectCreate.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  saveProject: PropTypes.func.isRequired,
  fetchProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  project: PropTypes.shape({}).isRequired
};

function mapStateToProps(state, props) {
  if (props.match.params.id) {
    return {
      project: state.projects.find(item => {
        return item.id === parseInt(props.match.params.id);
      })
    };
  }
  return { project: null };
}

export default connect(mapStateToProps, {
  saveProject,
  fetchProject,
  updateProject
})(ProjectCreate);
