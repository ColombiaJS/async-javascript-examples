var fs = require('fs');
var concatenation = '';
fs.readdir('.', function(err, filenames) {
  if (err) throw err;

  function readFileAt(i) {
    var filename = filenames[i];
    console.log(filename);
    if (typeof filename !== 'undefined') {
      fs.stat(filename, function(err, stats) {
        if (err) throw err;
        if (!stats.isFile()) return readFileAt(i + 1);

        fs.readFile(filename, 'utf8', function(err, text) {
          if (err) throw err;
          concatenation += text;

          if (i + 2 === filenames.length) {
            // all files read, display the output
            return console.log(concatenation);
          }

          readFileAt(i + 1);
        });
      });
    }
  }
  readFileAt(0);
});