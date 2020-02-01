import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { fetchProjects } from "../../../actions/ProjectAction";

class TopMenu extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <Dropdown text="Projects" item simple>
        <Dropdown.Menu>
          {this.props.projects.map(item => {
            return (
              <Dropdown.Item
                key={item.id}
                as={Link}
                to={`/project/detail/${item.id}`}
              >
                {item.title}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, { fetchProjects })(TopMenu);
