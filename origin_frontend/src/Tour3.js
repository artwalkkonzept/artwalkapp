import React from 'react';
import { Link } from "@reach/router";

function Tour3(props) {
  return (
    <div className="background-blue">
      <h1>Tour3</h1>
      <ul>
        {["Stol", "Bord", "Seng"].map(fruit =>
          <li>
            <Link to={`/stuff/${fruit}`}>{fruit}</Link>
          </li>)}
      </ul> <ul>
      <li><Link to="/tour">GO BACK</Link></li>
    </ul>
    </div>
  );
}

export default Tour3;