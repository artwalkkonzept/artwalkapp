import React from 'react';
import { Link } from "@reach/router";

function Navbar() {
  return <nav className="navbar container bg-dark"> 
    <h4><Link to="/tour"> Tour</Link></h4>
    <h4><Link to="/about"> About</Link></h4>
    <h4><Link to="/shop"> Shop</Link></h4>
    <h4><Link to="/"> Go back</Link></h4>

    </nav>
}

export default Navbar;
