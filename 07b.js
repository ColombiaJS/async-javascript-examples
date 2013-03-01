var async = require('async');
var fs = require('fs');

var concatenation = '';
var dirContents = fs.readdirSync('.');

async.filter(dirContents, isFilename, function(filenames) {
  async.eachSeries(filenames, readAndConcat, onComplete);
});

function isFilename(filename, callback) {
  fs.stat(filename, function(err, stats) {
  if (err) throw err;
    callback(stats.isFile());
  });
}

function readAndConcat(filename, callback) {
  fs.readFile(filename, 'utf8', function(err, fileContents) {
    if (err) return callback(err);
    concatenation += fileContents;
    callback();
  });
}

function onComplete(err) {
  if (err) throw err;
  console.log(concatenation);
}