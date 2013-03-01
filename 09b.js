//
// 02 - Pyramid of Doom / Callback Hell/Soup
//
var async = require('async');

async.waterfall([
  function(callback) {
    console.log('Inicio');
    callback(null, 0);
  },
  step1,
  step2,
  step3,
  step4
], function(err, results) {
  console.log('Result is: ' + results);
  console.log('Fin');
});

function step1(number, callback) {
  setTimeout(function () {
    console.log('Hello step 1');
    callback(null, 1);
  }, (Math.random() * 1000));
}

function step2(number, callback) {
  setTimeout(function () {
    console.log('Hello step 2');
    callback(null, 2);
  }, (Math.random() * 1000));
}

function step3(number, callback) {
  setTimeout(function () {
    console.log('Hello step 3');
    callback(null, 3);
  }, (Math.random() *  1000));
}

function step4(number, callback) {
  setTimeout(function () {
    console.log('Hello step 4');
    callback(null, 'Resultado final');
  }, (Math.random() * 1000));
}