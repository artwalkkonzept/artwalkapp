import React from 'react';
import contents from './UseCaseDiag.png'; 
/*import { Link } from "@reach/router";*/

//const url = 'https://sites.google.com/view/artwalkapp/';
function Content() {
  return (
    <div className="background-white">
      <h1>Content</h1>
    <ul>
      <li>
        <p>This is content.js</p>
      </li>
      <li>
      <a className="homeLink" href="https://sites.google.com/view/artwalkapp/english" target="_blank" rel="noopener noreferrer"><img src={contents} className="contentsLogo" alt="logo" /></a>
      </li>
    </ul>
    </div>      
  );
}
export default Content;