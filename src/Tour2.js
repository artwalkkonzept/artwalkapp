import React from 'react';
import { Link } from "@reach/router";

function Tour2(props) {
  return (
    <div className="background-blue">
      <h1>Tour2</h1>
      <ul>
        {["Leice", "Nicon", "Canon"].map(fruit =>
          <li>
            <Link to={`/showstuff/${fruit}`}>{fruit}</Link>
          </li>)}
      </ul> <ul>
      <li><Link to="/tour">GO BACK</Link></li>
    </ul>
    </div>
  );
}

export default Tour2;