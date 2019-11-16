import React, { Component } from "react";

const UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

  getUserDetail = () => {};

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export {UserConsumer, UserProvider};