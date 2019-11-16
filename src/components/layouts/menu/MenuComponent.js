import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { MenuConsumer } from "../../../context/MenuContext";

export class MenuComponent extends Component {
  handleLogout = () => {
    // auth.logout();
    this.props.history.push("/");
  };

  redirectRoute = route => {
    console.log(route);
    return <Redirect to={route} />;
  };

  render() {
    const logoutLink = () => {
      return (
        <div className="navbar-end nav-menu">
          <a href="" className="navbar-item is-tab" onClick={this.handleLogout}>
            <strong>Logout</strong>
          </a>
        </div>
      );
    };

    return (
      <React.Fragment>
        <MenuConsumer>
          {value => {
            return value.menus.map(menu => {
              return (
                <div
                  className="navbar-item has-dropdown is-hoverable"
                  key={menu.id}
                >
                  <a className="navbar-link">
                    <strong>{menu.name}</strong>
                  </a>
                  <div className="navbar-dropdown is-right">
                    {menu.menus.map(item => {
                      let route = `/${item.route}`.replace("\\", "/");
                      return (
                        <div key={item.id}>
                          <Link to={route} className="navbar-item">
                            {item.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            });
          }}
        </MenuConsumer>
        {logoutLink()}
      </React.Fragment>
    );
  }
}

export default MenuComponent;
