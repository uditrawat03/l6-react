import React, { Component } from "react";
import { getMethod } from "../services/ApiService";

const MasterContext = React.createContext();

class MasterProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      masters: []
    };
  }

  getMasters = param => {
    const url = `master?listing=${param}`;
    return getMethod(url);
  };

  render() {
    return (
      <MasterContext.Provider
        value={{
          ...this.state,
          getMasters: this.getMasters
        }}
      >
        {this.props.children}
      </MasterContext.Provider>
    );
  }
}

const MasterConsumer = MasterContext.Consumer;

export { MasterConsumer, MasterProvider };
