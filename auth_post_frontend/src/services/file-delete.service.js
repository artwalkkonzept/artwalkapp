// include node fs (File System) module 
var fs = require('fs');
 
// delete file named 'sample.txt'
fs.unlink('auth_post_backend/resources/static/assets/uploads/WP_20180714_001.jpg', function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');
});
//$ node file-delete.service.js
//node commands: http://riaevangelist.github.io/node-cmd/

/*import http from "../http-imgupload";

class FileDeleteService {
    delete(file, onDeleteProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onDeleteProgress,
    });
  }

  deleteFiles() {
    return http.delete("/files");
  }
}

export default new FileDeleteService();*/