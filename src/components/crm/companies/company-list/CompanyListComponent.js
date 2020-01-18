import React, { Suspense } from "react";
import { CompanyConsumer } from "../CompanyContext";

const Grid = React.lazy(() => import("../../../../services/Grid"));
const CompanyListComponent = () => {
  return (
    <CompanyConsumer>
      {value => {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Grid
              getData={value.getCompanies}
              data={value.companies}
              isLoader={value.isLoader}
              columns={value.columns}
            />
          </Suspense>
        );
      }}
    </CompanyConsumer>
  );
};

export default CompanyListComponent;
