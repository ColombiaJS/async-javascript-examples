//
// Understanding Async Nature
//
function insert(id, callback) {
  setTimeout(function() {
    console.log('Insertando ' + id);
    callback('Exitoso');
  }, 3000);
}

console.log('Op1');
insert(1, function(result) {
  console.log(result);
});
console.log('Op2');