import React, { Component } from "react";
import CompanyListComponent from "./CompanyListComponent";
import { getMethod } from "../../../../services/ApiService";
import CompanySearchComponent from "./CompanySearchComponent";
import { CompanyProvider } from "./CompanyContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class CompanyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      isLoader: true
    };
  }

  getCompanies = (page, limit) => {
    const url = `crm/companies?page=${page}&limit=${limit}`;
    getMethod(url).then(res => {
      this.setState({
        companies: res.data,
        isLoader: false
      });
    });
  };

  render() {
    return (
      <CompanyProvider>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box">
                <Link to="/crm/companies/create">
                  <Button className="button is-link">Add New</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box">
                <CompanyListComponent
                  companies={this.state.companies}
                  getCompanies={this.getCompanies}
                  isLoader={this.state.isLoader}
                />
              </div>
            </div>
            <div className="column is-one-third">
              <div className="box">
                <CompanySearchComponent />
              </div>
            </div>
          </div>
        </div>
      </CompanyProvider>
    );
  }
}

export default CompanyList;