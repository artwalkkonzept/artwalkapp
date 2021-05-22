import React from 'react';
import { Link } from "@reach/router";

function Team(props) {
  return (
    <div className="background-white">
      <h1>Team</h1>
      <ul>
        {["Team 1", "Team 2", "Team 3"].map(team =>
          <li>
            <Link to={`/showstuff/${team}`}>{team}</Link>
          </li>)}
      </ul>
    </div>
  );
}

export default Team;