//
// Promises
//
var Q = require('q'),
    fs = require('fs');

readFile('05.js').
  then(fileHandler).
  fail(failHandler);


function readFile(filename) {
  var fileReading = Q.defer();
  fs.readFile(filename, 'utf-8',
    fileReading.makeNodeResolver());
  return fileReading.promise;
}

function failHandler (err) {
  console.error(err);
}

function fileHandler(file) {
  console.log(file);
}