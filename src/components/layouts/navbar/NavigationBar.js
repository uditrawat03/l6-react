import React from "react";
import NavigationBarComponent from "./NavigationBarComponent";
import { MenuProvider } from "../../../context/MenuContext";

const NavigationBar = () => {
  return (
    <MenuProvider>
      <NavigationBarComponent />
    </MenuProvider>
  );
};

export default NavigationBar;
