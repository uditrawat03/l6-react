import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NavigationBar from "../layouts/navbar/NavigationBar";
import Login from "../auth/Login";
import MainComponent from "./MainComponent";
import * as actions from "../../actions/Auth";

const Main = ({ isAuthenticated, logout }) => {
  if (isAuthenticated) {
    return (
      <React.Fragment>
        <NavigationBar logout={logout} />
        <MainComponent />
      </React.Fragment>
    );
  } else {
    return <Login />;
  }
};

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.User.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(Main);
