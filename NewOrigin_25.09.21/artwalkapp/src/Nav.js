import React from 'react';
import { Link } from "@reach/router";

function Nav() {
  return (
    <ul>
      <li><Link to="/">Start</Link></li>
      <li><Link to="/tour">Tour</Link></li>
      <li><Link to="/calender">Calender</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
    </ul>
  );
}

export default Nav;
