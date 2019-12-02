import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Dropdown, Image, Container } from "semantic-ui-react";
import gravatarUrl from "gravatar-url";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../../actions/Auth";
import { MenuProvider } from "../../../context/MenuContext";

import UserMenu from "../menu/UserMenu";

const NavigationBar = ({ user, logout }) => {
  return (
    <MenuProvider>
      <Menu fixed="top" inverted>
        <Container>
          <MenuItem as={Link} to="/dashboard">
            Dashboard
          </MenuItem>
          <UserMenu />
          <Dropdown
            trigger={
              <Image avatar src={gravatarUrl("udit.rawat03@gmail.com")} />
            }
            item
            simple
            text="Dropdown"
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </MenuProvider>
  );
};

NavigationBar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.User
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  NavigationBar
);
