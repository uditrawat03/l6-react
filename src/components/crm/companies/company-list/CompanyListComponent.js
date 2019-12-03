import React, { Component, Suspense } from "react";
// import Grid from "../../../../services/Grid";
import { CompanyConsumer } from "../CompanyContext";

const Grid = React.lazy(() => import("../../../../services/Grid"));
class CompanyListComponent extends Component {
  render() {
    return (
      <CompanyConsumer>
        {value => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <Grid
                data={value.companies}
                getData={value.getCompanies}
                isLoader={value.isLoader}
                columns={value.columns}
              />
            </Suspense>
          );
        }}
      </CompanyConsumer>
    );
  }
}

export default CompanyListComponent;
