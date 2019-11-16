import React, { Component } from "react";
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

  getCompanies = (param, cb) => {
    const url = `crm/companies${param}`;
    getMethod(url).then(res => {
      this.setState({
        companies: res.data,
        isLoader: false
      });
    });
  };

  render() {
    return (
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
    );
  }
}

export default CompanyList;
