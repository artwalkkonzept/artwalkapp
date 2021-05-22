import React from 'react';
import { Link } from "@reach/router";

let tourImg = {
  imageUrl1:"https://lh3.googleusercontent.com/d/1ZsRHQ_cl05QEypsodoCXQDADVndco0Cb=w686-h228-n?authuser=0",
  imageUrl2:"https://lh3.googleusercontent.com/d/1uOLm3215E5Erv2_i4kjbZjq8EIytKBPJ=w686-h228-n?authuser=0",
  imageUrl3:"https://lh3.googleusercontent.com/d/1na4PqSWAwoAlDBZbeAAykGw99WPQ5FGo=w686-h228-n?authuser=0",
  imageUrl4:"https://lh3.googleusercontent.com/d/1Nt42rQ6PaQcw3m6-OVj7YGSp6RIIHXiA=w686-h228-n?authuser=0"
}

function Tour(props) {
  return (
    <div className="background-blue">
      <h1>Tour</h1>
      <ul>
      <img class="tourImgTop" alt="" src={tourImg.imageUrl1} />
        {[ 
      <Link class="tourImg" to='/tour1'><img alt="" src={tourImg.imageUrl2} /><br/>ZKM-Tour</Link>, 
      <Link class="tourImg" to='/tour2'><img alt="" src={tourImg.imageUrl3} /><br/>Landschaften</Link>, 
      <Link class="tourImg" to='/tour3'><img alt="" src={tourImg.imageUrl4} /><br/>Impressionistische Landshaften</Link>].map(tour =>
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