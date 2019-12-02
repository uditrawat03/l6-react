import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
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
        <div className="ui grid">
          <div class="row">
            <div className="sixteen wide column">
              <Segment>
                <Link to="/crm/companies/create">
                  <Button primary>Add New</Button>
                </Link>
              </Segment>
            </div>
          </div>
          <div class="row">
            <div className="eleven wide column">
              <Segment>
                <CompanyListComponent />
              </Segment>
            </div>
            <div className="five wide column">
              <Segment>
                <CompanySearchComponent />
              </Segment>
            </div>
          </div>
        </div>
      </CompanyProvider>
    );
  }
}

export default CompanyList;
