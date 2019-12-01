import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import NavigationBar from "../layouts/navbar/NavigationBar";
import Login from "../auth/Login";
import MainComponent from "./MainComponent";

const Main = ({ isAuthenticated, logout }) => {
  if (isAuthenticated) {
    return (
      <React.Fragment>
        <NavigationBar />
        <MainComponent />
      </React.Fragment>
    );
  } else {
    return <Route component={Login} />;
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

export default connect(mapStateToProps)(Main);
