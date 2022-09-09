const prompt = require('prompt-sync')();
var myinputarr = [];
var size = 5; // Array size

for (var a = 0; a < size; a++) {
  myinputarr[a] = '0' + (a + 1);
}

console.log(myinputarr);
