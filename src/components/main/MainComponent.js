import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import UserRoute from "../routes/UserRoute";
import GuestRoute from "../routes/GuestRoute";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import ProjectCreate from "../project/project-create/ProjectCreate";
import ProjectDetail from "../project/project-detail/ProjectDetail";

import TaskCreate from "../task/task-create/TaskCreate";

/*
import BrandList from "../crm/brands/brand-list/BrandList";
import AccountList from "../crm/accounts/account-list/AccountList";
import CreateCompany from "../crm/companies/create-company/CreateCompany";

import CompanyList from "../crm/companies/company-list/CompanyList";
import CompanyDetail from "../crm/companies/company-detail/CompanyDetail";
import Module from "../modules/Module";
*/

const MainComponent = ({ location }) => {
  return (
    <Switch>
      <GuestRoute location={location} exact path="/login" component={Login} />

      <UserRoute location={location} exact path="/" component={Dashboard} />
      <UserRoute
        location={location}
        exact
        path="/project/:id"
        component={ProjectDetail}
      />
      <UserRoute
        location={location}
        exact
        path="/project/create"
        component={ProjectCreate}
      />
      <UserRoute
        location={location}
        exact
        path="/project/edit/:id"
        component={ProjectCreate}
      />

      <UserRoute
        location={location}
        exact
        path="/task/create/:project_id"
        component={TaskCreate}
      />

      {/* <UserRoute location={location} exact path="/module" component={Module} /> */}

      {/* <UserRoute
        location={location}
        exact
        path="/project/create"
        component={CompanyList}
      />

      <UserRoute
        location={location}
        exact
        path="/crm/companies"
        component={CompanyList}
      />
      <UserRoute
        location={location}
        exact
        path="/crm/companies/create"
        component={CreateCompany}
      />

      <UserRoute
        location={location}
        exact
        path="/crm/company/detail/:id"
        component={CompanyDetail}
      />

      <UserRoute
        location={location}
        exact
        path="/crm/brands"
        component={BrandList}
      />
      <UserRoute
        location={location}
        exact
        path="/crm/accounts"
        component={AccountList}
      /> */}
      <UserRoute location={location} component={Dashboard} />
    </Switch>
  );
};

MainComponent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default MainComponent;
