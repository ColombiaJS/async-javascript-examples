//
// PubSub
//

var EE = new require('events').EventEmitter;

var emitter = new EE();

(function() {
  setTimeout(function() {
    emitter.emit('action', 'Hello Med.js');
  }, 5000);
})(); // Remember IIFE

emitter.on('action', function (params) {
  console.log(params);
});

emitter.on('action', function (params) {
  console.log('I can execute more actions!!');
});

// jQuery http://jsfiddle.net/jcsdD/