import React from "react";
import { Link } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";
import CompanyListComponent from "./CompanyListComponent";
import CompanySearchComponent from "./CompanySearchComponent";
import { CompanyProvider } from "../CompanyContext";

const CompanyList = () => {
  return (
    <CompanyProvider>
      <div className="ui grid">
        <div class="row">
          <div className="eleven wide column">
            <Segment>
              <Link to="/crm/companies/create">
                <Button primary>Add New</Button>
              </Link>
              <hr />
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

export default CompanyList;
