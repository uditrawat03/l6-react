import React, { Component } from "react";
import CreateCompanyComponent from "./CreateCompanyComponent";
import { MasterConsumer } from "../../../../context/MasterContext";

class CreateCompany extends Component {
  render() {
    return (
      <MasterConsumer>
        {value => {
          return (
            <div className="ui celled grid">
              <div class="row">
                <div className="column">
                  <CreateCompanyComponent
                    getMasters={value.getMasters}
                    masters={value.masters}
                  />
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
