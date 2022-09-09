const prompt = require('prompt-sync')();
const angka = prompt('Masukkan angka:');
const banyak_angka = angka.length;
let jumlah = 0;

for (i = 0; i < banyak_angka; i++) {
  jumlah += Math.pow(angka.charAt(i), banyak_angka);
}

if (jumlah == angka) {
  console.log(`${angka} adalah armstrong number`);
} else {
  console.log(`${angka} bukan armstrong number`);
}
