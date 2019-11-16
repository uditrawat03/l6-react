import React, { Component } from "react";
import MainComponent from "./MainComponent";

class Main extends Component {
  render() {
    return (
      <section className="section has-background-light">
        <div className="container">
            <MainComponent />          
        </div>
      </section>
    );
  }
}

export default Main;
