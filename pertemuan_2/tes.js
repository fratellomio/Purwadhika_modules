const prompt = require('prompt-sync')();

console.log('masukkan umur: ');

const input = prompt();
const umur = parseInt(input);

if (isNaN(umur)) {
  console.log('not a number');
} else if (umur <= 17) {
  console.log('Dibawah umur');
} else if (umur >= 18 && umur <= 25) {
  console.log('remaja');
} else if (umur > 26) {
  console.log('dewasa');
} else {
  console.log('asdasfd');
}
