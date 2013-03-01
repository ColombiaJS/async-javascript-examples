//
// Async.js
//

function insert(id, callback) {
  setTimeout(function() {
    console.log('Inserting ' + id);
    callback();
  }, (Math.random() * 1000));
}

for(var i = 0; i < 10; i++) {
  insert(i, function() {
    console.log('Im done with' + i);
  });
}