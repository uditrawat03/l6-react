import React from "react";
import { Link } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";
import CompanyListComponent from "./CompanyListComponent";

const CompanyList = () => {
  return (
    <Segment>
      <Link to="/crm/companies/create">
        <Button primary>Add New</Button>
      </Link>
      <hr />
      <CompanyListComponent />
    </Segment>
  );
};

export default CompanyList;
