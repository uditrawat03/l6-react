import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";

import NavigationBar from "../layouts/navbar/NavigationBar";
import Login from "../auth/Login";
import MainComponent from "./MainComponent";
import { MasterProvider } from "../../context/MasterContext";

const Main = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Container fluid>
        <NavigationBar />
        <Segment basic style={{ marginTop: "7em" }}>
          <MasterProvider>
            <MainComponent />
          </MasterProvider>
        </Segment>
      </Container>
    );
  } else {
    return <Route component={Login} />;
  }
};

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.User.token
  };
}

export default connect(mapStateToProps)(Main);
