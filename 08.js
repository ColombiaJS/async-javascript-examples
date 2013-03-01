//
// Async.js
//
var async = require('async');

function insert(id, callback) {
  setTimeout(function() {
    console.log('Inserting ' + id);
    callback(null, id);
  }, (Math.random() * 1000));
}

function filter(data, callback) {
  callback(data < 3);
}

var data = [0, 1, 2, 3, 4, 5];

async.filter(data, filter, function(filteredData) {
  async.eachSeries(filteredData, insert, function(err) {
    if (err) throw err;
      console.log('Finished');
    });
});

/*async.each(data, insert, function(err) {
  if (err) throw err;
  console.log('Finished');
});*/







