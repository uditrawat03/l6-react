import React, { Component } from "react";
import CreateCompanyComponent from "./CreateCompanyComponent";

export class CreateCompany extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="box">
              <CreateCompanyComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCompany;
