import React, { Component } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  NativeSelect
} from "@material-ui/core";

export class CreateCompanyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      masters: {
        companySource: [],
        companyImportance: [],
        companyClass: []
      }
    };
  }

  componentWillMount() {
    this.props
      .getMasters("company-source,company-class,company-importance")
      .then(res => {
        this.setState({
          masters: res.data
        });
      });
  }

  render() {
    return (
      <form>
        <div className="field">
          <div className="columns">
            <div className="column">
              <TextField type="search" label="Code" name="code" />
            </div>
            <div className="column">
              <TextField type="search" label="Name" name="name" />
            </div>
            <div className="column">
              {/* <TextField type="search" label="code" name="code" /> */}
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <FormControl className="">
                <InputLabel htmlFor="name-native-disabled">Class</InputLabel>
                <NativeSelect>
                  <option value="" />
                  {this.state.masters.companyClass.map(companyClass => {
                    return (
                      <option key={companyClass.id}>{companyClass.name}</option>
                    );
                  })}
                </NativeSelect>
              </FormControl>
            </div>
            <div className="column">
              <FormControl className="">
                <InputLabel htmlFor="name-native-disabled">Source</InputLabel>
                <NativeSelect>
                  <option value="" />
                  {this.state.masters.companySource.map(source => {
                    return <option key={source.id}>{source.name}</option>;
                  })}
                </NativeSelect>
              </FormControl>
            </div>
            <div className="column">
              <FormControl className="">
                <InputLabel htmlFor="name-native-disabled">
                  Importance
                </InputLabel>
                <NativeSelect>
                  <option value="" />
                  {this.state.masters.companyImportance.map(source => {
                    return <option key={source.id}>{source.name}</option>;
                  })}
                </NativeSelect>
              </FormControl>
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
