//
// 02 - Pyramid of Doom / Callback Hell/Soup
//
var async = require('async');

async.parallel([
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

function step1(callback) {
  setTimeout(function () {
    console.log('Hello step 1');
    callback(null, 'Hola');
  }, (Math.random() * 1000));
}

function step2(callback) {
  setTimeout(function () {
    console.log('Hello step 2');
    callback(null, 'Mundo');
  }, (Math.random() * 1000));
}

function step3(callback) {
  setTimeout(function () {
    console.log('Hello step 3');
    callback(null, 'Soy Async');
  }, (Math.random() *  1000));
}

function step4(callback) {
  setTimeout(function () {
    console.log('Hello step 4');
    callback(null, 4);
  }, (Math.random() * 1000));
}