import React from 'react';
import { Link } from "@reach/router";
/*import Tour1 from './Tour1';
import Tour2 from './Tour2';
import Tour3 from './Tour3';*/

function Tour(props) {
  return (
    <div className="background-blue">
      <h1>Tour</h1>
      <ul>
        {[<Link to='/tour1'>Tour1</Link>, <Link to='/tour2'>Tour2</Link>, <Link to='/tour3'>Tour3</Link>].map(tour =>
          <li>
            <Link to={`/tourContent/${tour}`}>{tour}</Link>
          </li>)}
      </ul>
    </div>
  );
}

export default Tour;