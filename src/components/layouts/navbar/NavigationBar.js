import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Dropdown, Image } from "semantic-ui-react";
import gravatarUrl from "gravatar-url";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../../actions/Auth";
import { MenuProvider, MenuConsumer } from "../../../context/MenuContext";

import UserMenu from "../menu/UserMenu";

const NavigationBar = ({ user, logout }) => {
  const userLinks = () => {
    return <UserMenu />;
  };
  return (
    <MenuProvider>
      <Menu secondary pointing>
        <MenuItem as={Link} to="/dashboard">
          Dashboard
        </MenuItem>
        <UserMenu />
        <Menu.Menu position="right">
          <Dropdown
            trigger={
              <Image avatar src={gravatarUrl("udit.rawat03@gmail.com")} />
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
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
