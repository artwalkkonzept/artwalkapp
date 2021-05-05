import React from 'react';
import { Link } from "@reach/router";

function Gallery(props) {
  return (
    <div className="background-white">
      <h1>Gallery</h1>
      <ul>
        {["image1", "image2", "image3"].map(fruit =>
          <li>
            <Link to={`/stuff/${fruit}`}>{fruit}</Link>
          </li>)}
      </ul>
    </div>
  );
}

export default Gallery;