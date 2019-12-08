import React from "react";
import { Segment } from "semantic-ui-react";
import { CompanyProvider } from "./CompanyContext";

import CompanySearchComponent from "./company-list/CompanySearchComponent";
import CompanyList from "./company-list/CompanyList";
// import CreateCompany from "./create-company/CreateCompany";

const Company = () => {
  return (
    <CompanyProvider>
      <div className="ui grid">
        <div class="row">
          <div className="eleven wide column">
            <CompanyList />
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
};

export default Company;
