import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export class CreateCompanyComponent extends Component {
  render() {
    return (
      <form>
        <div className="field">
          <div className="columns">
            <div className="column">
              <TextField type="search" label="code" name="code" />
            </div>
            <div className="column">
              <TextField type="search" label="code" name="code" />
            </div>
            <div className="column">
              <TextField type="search" label="code" name="code" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <TextField type="search" label="code" name="code" />
            </div>
            <div className="column">
              <TextField type="search" label="code" name="code" />
            </div>
            <div className="column">
              <TextField type="search" label="code" name="code" />
            </div>
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
    );
  }
}

export default CreateCompanyComponent;
