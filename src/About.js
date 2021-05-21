import React from 'react';
//import { Link } from "@reach/router";

import NameList from './NameList';

// Nothing special happens in this component, except for the Link
const url = 'https://sites.google.com/view/artwalkapp/';

function About(props) {
  return (
    <div className="background-orange">
      <div className="Footer-team">
        <NameList names={["David Heiermann", "Lena Ambrosch", "Antonia Opitz", "Daniel Jacoby", "Peter Frankild", "Liliya Ivanova"]} />
      </div>
      <div className="Footer-link">
        <h3>Links</h3>
          <ul>
            <li>
              <a href={url}>ArtWalk</a>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default About;
