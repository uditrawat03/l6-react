import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import ProjectList from "../project/project-list/ProjectList";
import { fetchProjects } from "../../actions/ProjectAction";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div className="ui grid">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="row">
            <div className="eleven wide column">
              <Link to="/project/create">
                <Button primary>Create New Project</Button>
              </Link>
            </div>
          </div>
          <div className="row">
            <ProjectList projects={this.props.projects} />
          </div>
        </Suspense>
      </div>
    );
  }
}

Dashboard.propTypes = {
  projects: PropTypes.shape([]).isRequired,
  fetchProjects: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, { fetchProjects })(Dashboard);
