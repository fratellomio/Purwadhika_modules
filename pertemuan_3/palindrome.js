const prompt = require('prompt-sync')();

const kata = prompt('Masukkan kata: ');
let balik_kata = '';
const regex = /[\W_]/g;
normalisasi_kata = kata.toLowerCase().replace(regex, '');
console.log(normalisasi_kata);
for (
  let index_kata = normalisasi_kata.length - 1;
  index_kata >= 0;
  index_kata--
) {
  balik_kata += normalisasi_kata[index_kata];
}

console.log(normalisasi_kata === balik_kata ? 'Palindrom' : 'Bukan palindrom');
