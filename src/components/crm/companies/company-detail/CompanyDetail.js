import React from "react";
import { Segment } from "semantic-ui-react";
import CompanySearchComponent from "../company-list/CompanySearchComponent";
import { CompanyProvider } from "../CompanyContext";

const CompanyDetail = () => {
  return (
    <CompanyProvider>
      <div className="ui grid">
        <div class="row">
          <div className="eleven wide column">
            <Segment>
              <h1>Company Detail</h1>
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

export default CompanyDetail;
