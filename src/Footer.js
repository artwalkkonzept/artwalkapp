import React from 'react';
import { Link } from "@reach/router";

import './App.css';

function Footer() {
  return (
      <div className="background-gray">
 <div class="goTour">
      <ul>
      <li><Link to="/tour">🍔</Link></li>
      <li><Link to="/tour">Tour</Link></li>
      </ul>
      </div>
 <div class="goTeam">
      <ul>
      <li><Link to="/team">🍕</Link></li>
      <li><Link to="/team">Team</Link></li>
      </ul>
      </div>
 <div class="goProfil">
      <ul>
      <li><Link to="/profil">🍔</Link></li>
      <li><Link to="/profil">Profil</Link></li>
      </ul>
      </div>
    </div>
  );
}

export default Footer;