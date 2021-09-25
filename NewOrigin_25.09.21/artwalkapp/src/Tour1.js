import React from 'react';
import { Link } from "@reach/router";

function Tour1(props) {
  return (
    <div className="background-blue">
      <h1>Tour1</h1>
      <ul>
        {["apples", "bananas", "oranges"].map(fruit =>
          <li>
            <Link to={`/stuff/${fruit}`}>{fruit}</Link>
          </li>)}
      </ul>
      <ul>
      <li><Link to="/tour">GO BACK</Link></li>
    </ul>
    </div>
  );
}

export default Tour1;