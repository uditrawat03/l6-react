import React from "react";
import { Link } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import { CompanyProvider } from "./CompanyContext";
import CompanyListComponent from "./company-list/CompanyListComponent";
import CompanySearchComponent from "./company-list/CompanySearchComponent";

const Company = () => {
  return (
    <CompanyProvider>
      <div className="ui grid">
        <div class="row">
          <div className="eleven wide column">
            <Segment>
              <Link to="/crm/companies/create">
                <Button primary>Add New</Button>
              </Link>
            </Segment>
            <Segment>
              <CompanyListComponent />
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
};

export default Company;
