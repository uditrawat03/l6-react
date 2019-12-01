import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { CompanyProvider } from "../CompanyContext";
import CompanyListComponent from "./CompanyListComponent";
import { getMethod } from "../../../../services/ApiService";
import CompanySearchComponent from "./CompanySearchComponent";
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
        <div className="ui celled grid">
          <div class="row">
            <div className="thirteen wide column">
              <Link to="/crm/companies/create">
                <Button className="button is-link">Add New</Button>
              </Link>
            </div>
          </div>
          <div class="row">
            <div className="ten wide column">
              <CompanyListComponent />
            </div>
            <div className="three wide column">
              <CompanySearchComponent />
            </div>
          </div>
        </div>
      </CompanyProvider>
    );
  }
}

export default CompanyList;
