import React, { Component } from "react";
import { getMethod } from "../services/ApiService";
const MenuContext = React.createContext();

class MenuProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    // this.getMenu();
  }

  getMenu() {
    getMethod("menus").then(res => {
      this.setState({
        menus: res.data.data
      });
    });
  }

  render() {
    return (
      <MenuContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}

const MenuConsumer = MenuContext.Consumer;

export { MenuProvider, MenuConsumer };
