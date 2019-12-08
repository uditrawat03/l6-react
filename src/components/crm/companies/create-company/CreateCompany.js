import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CreateCompanyComponent from "./CreateCompanyComponent";
import CompanySearchComponent from "../company-list/CompanySearchComponent";
import { CompanyProvider } from "../CompanyContext";
// import { MasterConsumer } from "../../../../context/MasterContext";

class CreateCompany extends Component {
  render() {
    return (
      <CompanyProvider>
        <div className="ui grid">
          <div class="row">
            <div className="eleven wide column">
              <Segment>
                <CreateCompanyComponent />
              </Segment>
            </div>
            <div className="five wide column">
              <Segment>
                <CompanySearchComponent />
              </Segment>
            </div>
          </div>
        </div>
      </CompanyProvider>
    );
  }
}

export default CreateCompany;
