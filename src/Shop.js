import React from 'react';
import { Link } from "@reach/router";

// Nothing special happens in this component, except for the Link
function Shop(props) {
  return (
    <div className="background-green">
      <h1>Shop</h1>
      <p>This app is about Routing..</p>
      <Link to="/">Go back</Link>
    </div>
  );

}

export default Shop;