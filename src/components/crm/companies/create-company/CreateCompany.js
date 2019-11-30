import React, { Component } from "react";
import CreateCompanyComponent from "./CreateCompanyComponent";
import { MasterConsumer } from "../../../../context/MasterContext";

class CreateCompany extends Component {
  render() {
    return (
      <MasterConsumer>
        {value => {
          return (
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="box">
                    <CreateCompanyComponent
                      getMasters={value.getMasters}
                      masters={value.masters}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </MasterConsumer>
    );
  }
}

export default CreateCompany;
