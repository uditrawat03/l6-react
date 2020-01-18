import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { fetchProjects } from "../../../actions/ProjectAction";

const TopMenu = ({ projects }) => {
  return (
    <Dropdown text="Projects" item simple>
      <Dropdown.Menu>
        {projects.map(item => {
          return (
            <Dropdown.Item key={item.id} as={Link} to={`/project/${item.id}`}>
              {item.title}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, fetchProjects)(TopMenu);
