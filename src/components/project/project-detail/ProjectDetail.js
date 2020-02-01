import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProjectDetailComponent from "./ProjectDetailComponent";
import { fetchProjectWorkflows } from "../../../actions/ProjectWorkflowAction";

class ProjectDetail extends Component {
  state = {
    workflows: [],
    loader: false
  };

  fetchProjectWorkflows = projectId => {
    this.props.fetchProjectWorkflows(projectId);
  };

  render() {
    if (this.props.project) {
      this.fetchProjectWorkflows(this.props.project.id);
    }

    const projectDetail = this.props.project ? (
      <ProjectDetailComponent
        project={this.props.project}
        onDragEnd={this.onDragEnd}
      />
    ) : (
      ""
    );

    return <div>{projectDetail}</div>;
  }
}

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    workflows: PropTypes.arrayOf(PropTypes.shape({})).isRequired
  }).isRequired,
  fetchProjectWorkflows: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  let project = null;
  if (props.match.params.id) {
    project = state.projects.find(item => {
      return item.id === parseInt(props.match.params.id);
    });
  }
  return { project };
}

export default connect(mapStateToProps, { fetchProjectWorkflows })(
  ProjectDetail
);
