import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="./tour">Tour
      </a>

      <a className="menu-item" href="/calender">
      Calender
      </a>

      <a className="menu-item" href="/gallery">
      Gallery
      </a>
    </Menu>
  );
};