import React, { Component } from "react";
import { getMethod } from "../../../../services/ApiService";

const CompanyContext = React.createContext();

class CompanyProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      isLoader: true,
      columns: [
        { name: "Code", field: "code" },
        { name: "Name", field: "name" }
      ]
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
      <CompanyContext.Provider
        value={{ ...this.state, getCompanies: this.getCompanies }}
      >
        {this.props.children}
      </CompanyContext.Provider>
    );
  }
}

const CompanyConsumer = CompanyContext.Consumer;

export { CompanyProvider, CompanyConsumer };
