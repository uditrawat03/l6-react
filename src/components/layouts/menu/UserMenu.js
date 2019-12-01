import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

import { MenuConsumer } from "../../../context/MenuContext";

const UserMenu = () => {
  return (
    <MenuConsumer>
      {value => {
        return value.menus.map(menu => {
          return (
            <Menu.Menu position="left" key={menu.id}>
              <Dropdown text={menu.name}>
                <Dropdown.Menu>
                  {menu.menus.map(item => {
                    let route = `/${item.route}`.replace("\\", "/");
                    return (
                      <Dropdown.Item key={item.id} as={Link} to={route}>
                        {item.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          );
        });
      }}
    </MenuConsumer>
  );
};

export default UserMenu;
