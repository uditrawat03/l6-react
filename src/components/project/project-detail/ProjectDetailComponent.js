import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectDetailComponent = ({ project }) => {
  return (
    <div className="sixteen wide tablet sixteen wide computer column profileheader row no-padding">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>
        <Link
          to={`/task/create/${project.id}`}
          className="ui basic button green"
        >
          Create New Task
        </Link>
      </p>
    </div>
  );
};

ProjectDetailComponent.propTypes = {
  project: PropTypes.shape({}).isRequired
};

export default ProjectDetailComponent;
