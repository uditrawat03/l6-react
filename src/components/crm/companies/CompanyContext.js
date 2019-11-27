import React, { Component } from "react";
import { postMethod } from "../../../services/ApiService";

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

  handleOnChange = event => {
    const { name, value, type, checked } = event.target;
    console.log(name, type);
    type === "checked"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleSearch = event => {
    event.preventDefault();
    this.getCompanies(this.state.page, this.state.limit);
  };

  getCompanies = (page, limit) => {
    const url = `crm/companies?page=${page}&limit=${limit}`;
    const filters = { filters: this.setFilters() };
    // if (this.state.filters.length > 0) {
    //   filters = {};
    // }

    postMethod(url, filters).then(res => {
      this.setState({
        companies: res.data,
        isLoader: false,
        page: page,
        limit: limit
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
