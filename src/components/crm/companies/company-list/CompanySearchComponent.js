import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CompanySearchComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Search</h1>
        <div className="field">
          <div className="control">
            <TextField type="search" label="code" />
          </div>
          <div className="control">
            <TextField type="search" label="Name" />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Search</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanySearchComponent;
