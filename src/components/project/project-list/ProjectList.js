import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  const emptyMessage = <h1>There are no projects in your collections.</h1>;

  const projectList = (
    <div className="ui four cards">
      {projects.map(project => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );

  return <div>{projects.length === 0 ? emptyMessage : projectList}</div>;
};

ProjectList.propTypes = {
  projects: PropTypes.shape([]).isRequired
};

export default ProjectList;
