import React, { Component, Suspense } from "react";
// import Grid from "../../../../services/Grid";
import { CompanyConsumer } from "../CompanyContext";

const DataGrid = React.lazy(() => import("../../../../services/DataGrid"));
class CompanyListComponent extends Component {
  render() {
    return (
      <CompanyConsumer>
        {value => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <DataGrid
                getData={value.getCompanies}
                columnDefs={value.columns}
              />
            </Suspense>
          );
        }}
      </CompanyConsumer>
    );
  }
}

export default CompanyListComponent;
