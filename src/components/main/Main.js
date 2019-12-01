import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NavigationBar from "../layouts/navbar/NavigationBar";
import Login from "../auth/Login";
import MainComponent from "./MainComponent";

const Main = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <React.Fragment>
        <NavigationBar />
        <MainComponent />
      </React.Fragment>
    );
  } else {
    return <Login />;
  }
};

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user
  };
}

export default connect(mapStateToProps)(Main);
