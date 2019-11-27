import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import { CompanyConsumer } from "../CompanyContext";

class CompanySearchComponent extends Component {
  render() {
    return (
      <CompanyConsumer>
        {value => {
          return (
            <React.Fragment>
              <h1>Search</h1>
              <form method="post" role="form" onSubmit={value.handleSearch}>
                <div className="field">
                  <div className="control">
                    <TextField
                      type="search"
                      label="code"
                      name="code"
                      value={value.code}
                      onChange={value.handleOnChange}
                    />
                  </div>
                  <div className="control">
                    <TextField
                      type="search"
                      label="Name"
                      name="name"
                      value={value.name}
                      onChange={value.handleOnChange}
                    />
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Search</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </form>
            </React.Fragment>
          );
        }}
      </CompanyConsumer>
    );
  }
}

export default CompanySearchComponent;
