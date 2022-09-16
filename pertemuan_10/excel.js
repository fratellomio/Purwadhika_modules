function lettersToNumber(huruf) {
  var daftarHuruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    panjang = daftarHuruf.length,
    hasil = 0;
  let r = /\d/;
  if (r.test(huruf)) {
    return 'input salah';
  } else {
    normalisasiHuruf = huruf.toUpperCase();
    for (let j = 0; j < normalisasiHuruf.length; j++) {
      hasil = hasil * panjang + daftarHuruf.indexOf(normalisasiHuruf[j]) + 1;
    }
  }
  return hasil;
}

console.log(lettersToNumber('AA'));
console.log(lettersToNumber('AZ'));
console.log(lettersToNumber('1AB'));
console.log(lettersToNumber('AB1'));
