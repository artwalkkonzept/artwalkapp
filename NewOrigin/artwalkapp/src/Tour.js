import React from 'react';
import { Link } from "@reach/router";

let tourImg = {
  imageUrl1:"https://",
  imageUrl2:"https://",
  imageUrl3:"https://",
  imageUrl4:"https://"
}

function Tour(props) {
  return (
    <div className="background-blue">
      <h1>Tour</h1>
      <ul>
        {[<><img alt="" src={tourImg.imageUrl1} /><br/>Tours</>, 
      <Link to='/tour1'><img alt="" src={tourImg.imageUrl2} /><br/>ZKM-Tour</Link>, 
      <Link to='/tour2'><img alt="" src={tourImg.imageUrl3} /><br/>Landschaften</Link>, 
      <Link to='/tour3'><img alt="" src={tourImg.imageUrl4} /><br/>Impressionistische Landshaften</Link>].map(tour =>
          <li>
            <Link to={`/${tour}`}>{tour}</Link>
          </li>)}
      </ul>

{/*<div className="tourImg">
      <img alt="" src={urlm.imageUrl1} />
      <img alt="" src={urlm.imageUrl2} />
      <img alt="" src={urlm.imageUrl3} />
      <img alt="" src={urlm.imageUrl4} />
      </div>*/}
  </div>
);
}

export default Tour;