import React from "react";
import PropTypes from "prop-types";

import { Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Company from "../crm/companies/Company";
import BrandList from "../crm/brands/brand-list/BrandList";
import AccountList from "../crm/accounts/account-list/AccountList";
import CreateCompany from "../crm/companies/create-company/CreateCompany";
import Login from "../auth/Login";
import UserRoute from "../routes/UserRoute";
import GuestRoute from "../routes/GuestRoute";

const MainComponent = ({ location }) => {
  return (
    <Switch>
      <GuestRoute location={location} exact path="/login" component={Login} />

      <UserRoute location={location} exact path="/" component={Dashboard} />
      <UserRoute
        location={location}
        exact
        path="/crm/companies"
        component={Company}
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
        path="/crm/brands"
        component={BrandList}
      />
      <UserRoute
        location={location}
        exact
        path="/crm/accounts"
        component={AccountList}
      />
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
