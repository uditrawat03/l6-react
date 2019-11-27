import React, { Component } from "react";
import Grid from "../../../../services/Grid";
import { CompanyConsumer } from "../CompanyContext";

class CompanyListComponent extends Component {
  render() {
    return (
      <CompanyConsumer>
        {value => {
          return (
            <Grid
              data={value.companies}
              getData={value.getCompanies}
              isLoader={value.isLoader}
              columns={value.columns}
            />
          );
        }}
      </CompanyConsumer>
    );
  }
}

export default CompanyListComponent;
