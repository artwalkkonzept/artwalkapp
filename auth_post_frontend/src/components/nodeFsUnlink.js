

import React from 'react';
import ReactDOM from 'react-dom';

var fs = require('fs');

class nodefs extends React.Component {
  render() {

//Delete the file mynewfile2.txt:
fs.unlink('../auth_post_backend/resources/static/assets/uploads/WP_20180714_001.jpg', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
}
}
export default nodefs;