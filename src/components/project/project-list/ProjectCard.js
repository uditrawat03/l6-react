import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="ui card">
      {/* <div className="image"></div> */}
      <div className="content">
        <div className="header">{project.title}</div>
        <div className="extra content">
          <Link
            to={`/project/edit/${project.id}`}
            className="ui basic button green"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({}).isRequired
};

export default ProjectCard;
