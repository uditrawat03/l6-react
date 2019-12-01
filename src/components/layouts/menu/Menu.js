import React from "react";
import { Link } from "react-router-dom";

import { MenuConsumer } from "../../../context/MenuContext";

const Menu = () => {
  return (
    <MenuConsumer>
      {value => {
        return value.menus.map(menu => {
          return (
            <div
              className="navbar-item has-dropdown is-hoverable"
              key={menu.id}
            >
              <span className="navbar-link">
                <strong>{menu.name}</strong>
              </span>
              <div className="navbar-dropdown is-right">
                {menu.menus.map(item => {
                  let route = `/${item.route}`.replace("\\", "/");
                  return (
                    <div key={item.id}>
                      <Link to={route} className="navbar-item">
                        {item.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        });
      }}
    </MenuConsumer>
  );
};

export default Menu;
