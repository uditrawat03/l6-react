import React, { Suspense } from "react";
// import GridExample from "../../services/GridExample";
const GridExample2 = React.lazy(() => import("../../services/GridExample2"));

const Dashboard = () => {
  return (
    <div className="ui grid">
      <Suspense fallback={<div>Loading...</div>}>
        <GridExample2 />
      </Suspense>
    </div>
  );
};

export default Dashboard;
