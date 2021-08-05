var fs = require('fs');

//Delete the file mynewfile2.txt:
fs.unlink('WP_20180714_001.jpg', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

//var cmd=require('node-cmd');

//var process=cmd.run('node');