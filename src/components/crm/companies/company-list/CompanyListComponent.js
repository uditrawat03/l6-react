import React, { Component } from "react";
import Grid from "../../../../services/Grid";
import { CompanyConsumer } from "./CompanyContext";

class CompanyListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CompanyConsumer>
        {value => {
          console.log(value);
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
