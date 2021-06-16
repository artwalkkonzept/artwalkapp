import React from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/image-upload.component";

function ImgUpload() {
  return (
    <div className="container">
      <h3>ArtWalk</h3>
      <h4>React Image Upload with Preview</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default ImgUpload;
