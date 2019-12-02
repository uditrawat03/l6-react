import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import NavigationBar from "../layouts/navbar/NavigationBar";
import Login from "../auth/Login";
import MainComponent from "./MainComponent";
import { MasterProvider } from "../../context/MasterContext";
import { Container } from "semantic-ui-react";

const Main = ({ isAuthenticated, logout }) => {
  if (isAuthenticated) {
    return (
      <React.Fragment>
        <NavigationBar />
        <Container style={{ marginTop: "7em" }}>
          <MasterProvider>
            <MainComponent />
          </MasterProvider>
        </Container>
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
