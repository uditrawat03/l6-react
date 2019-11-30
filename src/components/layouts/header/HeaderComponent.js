import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";

class HeaderComponent extends Component {
  render() {
    const userLinks = () => {
      return <Menu />;
    };

    return (
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
            </div>
          </nav>
        </header>
      </section>
    );
  }
}

export default HeaderComponent;
