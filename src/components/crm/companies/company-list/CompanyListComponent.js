import React, { Component } from "react";
import Grid from "../../../../services/Grid";

class CompanyListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: "Code", field: "code" },
        { name: "Name", field: "name" }
      ]
    };
  }

  render() {
    return (
      <Grid
        data={this.props.companies}
        getData={this.props.getCompanies}
        isLoader={this.props.isLoader}
        columns={this.state.columns}
      />
    );
  }
}

export default CompanyListComponent;
