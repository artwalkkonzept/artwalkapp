import React from 'react';
import { Link } from "@reach/router";

function Profil(props) {
  return (
    <div className="background-white">
      <h1>Team</h1>
      <ul>
        {["Profil 1", "Profil 2", "Profil 3"].map(profil =>
          <li>
            <Link to={`/showstuff/${profil}`}>{profil}</Link>
          </li>)}
      </ul>
    </div>
  );
}

export default Profil;