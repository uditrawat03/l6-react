import React, { Component } from "react";
import "./loader.scss";

export class LoaderComponent extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box">
                <div className="loader-wrapper is-active">
                  <div className="loader is-loading"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoaderComponent;
