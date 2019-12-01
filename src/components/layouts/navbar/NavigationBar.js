import React from "react";
import { Link } from "react-router-dom";

import { MenuProvider } from "../../../context/MenuContext";
import Menu from "../menu/Menu";

const NavigationBar = props => {
  const userLinks = () => {
    return <Menu />;
  };
  return (
    <MenuProvider>
      <section className="hero ">
        <header className="hero-body">
          <nav className="navbar has-shadow">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item is-paddingless brand-item">
                  Logo
                </Link>
                <button className="button navbar-burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              <div className="navbar-menu">{userLinks()}</div>
              <div className="navbar-end nav-menu">
                <span className="navbar-item is-tab" onClick={props.logout}>
                  <strong>Logout</strong>
                </span>
              </div>
            </div>
          </nav>
        </header>
      </section>
    </MenuProvider>
  );
};

export default NavigationBar;
