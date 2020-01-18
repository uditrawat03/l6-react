import React from "react";
import { connect } from "react-redux";
import ProjectDetailComponent from "./ProjectDetailComponent";

const ProjectDetail = ({ project }) => {
  const projectDetail = project ? (
    <ProjectDetailComponent project={project} />
  ) : (
    ""
  );

  return <div className="pusher pushable">{projectDetail}</div>;
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

export default connect(mapStateToProps, {})(ProjectDetail);
