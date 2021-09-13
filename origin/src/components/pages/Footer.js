import React from 'react';

import '../../App.css';

import NameList from './NameList';

const url = 'https://sites.google.com/view/artwalkapp/';
function Footer() {
  return (

    <div className="background-gray">
    <div className="Footer-team">
        <NameList names={["David Heiermann", "Lena Ambrosch", "Antonia Opitz", "Daniel Jacoby", "Peter Frankild", "Liliya Ivanova"]} />
    </div>
    <div className="Footer-link">
        <h3>Links</h3>
    <ul>
      <li>
    <a href={url}>ArtWalk</a></li>
    </ul>
    </div>
    </div>
    
  );
}

export default Footer;