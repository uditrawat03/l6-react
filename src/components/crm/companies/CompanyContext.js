import React, { Component } from "react";
import api from "../../../services/api";

const CompanyContext = React.createContext();

class CompanyProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      filters: [],
      isLoader: true,
      page: 1,
      limit: 10,
      name: "",
      code: "",
      columns: [
        { name: "Code", field: "code" },
        { name: "Name", field: "name" }
      ],
      masters: {
        companySource: [],
        companyClass: [],
        companyImportance: []
      }
    };
  }

  getCompanies = (page, limit) => {
    const url = `crm/companies`;
    const filters = {
      filters: this.setFilters(),
      page,
      limit
    };
    api.service.post(url, filters).then(res => {
      this.setState({
        companies: res,
        isLoader: false,
        page,
        limit
      });
    });
  };

  setFilters = () => {
    const filters = {
      name: this.state.name,
      code: this.state.code
    };
    return filters;
  };

  handleOnChange = event => {
    const { name, value, type, checked } = event.target;

    type === "checked"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleSearch = event => {
    event.preventDefault();
    this.getCompanies(this.state.page, this.state.limit);
  };

  submit = data => {
    const url = `crm/companies/add`;
    return api.service.post(url, data);
  };

  render() {
    return (
      <CompanyContext.Provider
        value={{
          ...this.state,
          getCompanies: this.getCompanies,
          handleSearch: this.handleSearch,
          handleOnChange: this.handleOnChange,
          getMasters: this.getMasters
        }}
      >
        {this.props.children}
      </CompanyContext.Provider>
    );
  }
}

const CompanyConsumer = CompanyContext.Consumer;

export { CompanyProvider, CompanyConsumer };
