import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import CompanyList from "../crm/companies/company-list/CompanyList";
import BrandList from "../crm/brands/brand-list/BrandList";
import AccountList from "../crm/accounts/account-list/AccountList";
import CreateCompany from "../crm/companies/create-company/CreateCompany";
import Login from "../auth/Login";

class MainComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/crm/companies" component={CompanyList} />
          <Route exact path="/crm/companies/create" component={CreateCompany} />

          <Route exact path="/crm/brands" component={BrandList} />
          <Route exact path="/crm/accounts" component={AccountList} />
          <Route component={Dashboard} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default MainComponent;
