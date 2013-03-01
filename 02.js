//
// 02 - Pyramid of Doom / Callback Hell/Soup
//
console.log('Inicio');
step1(function(result1) {
  step2(function(result2) {
    step3(function(result3) {
      step4(function(result4) {
        console.log('Result is: '+ result4);
      });
    });
  });
});
console.log('Fin');

function step1(callback) {
  setTimeout(function () {
    console.log('Hello step 1');
    callback(1);
  }, (Math.random() * 1000));
}

function step2(callback) {
  setTimeout(function () {
    console.log('Hello step 2');
    callback(2);
  }, (Math.random() * 1000));
}

function step3(callback) {
  setTimeout(function () {
    console.log('Hello step 3');
    callback(3);
  }, (Math.random() *  1000));
}

function step4(callback) {
  setTimeout(function () {
    console.log('Hello step 4');
    callback(4);
  }, (Math.random() * 1000));
}