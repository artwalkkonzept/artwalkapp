import React from 'react';
import { Link } from "@reach/router";

function Gallery(props) {
  return (
    <div className="background-white">
      <h1>Gallery</h1>
      <ul>
        {["image1", "image2", "image3"].map(image =>
          <li>
            <Link to={`/showstuff/${image}`}>{image}</Link>
          </li>)}
      </ul>
    </div>
  );
}

export default Gallery;