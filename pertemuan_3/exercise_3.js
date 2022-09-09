const prompt = require('prompt-sync')();
console.log(`
1. Write a code to display the multiplication table of a given integer.
2. Write a code to check whether a string is a palindrome or not.
3. Write a code to convert centimeter to kilometer.
4. Write a code to format number as currency (IDR)
5. Write a code to remove the first occurrence of a given “search string” from a string
6. Write a code to capitalize the first letter of each word in a string
7. Write a code to reverse a string
`);
const soal = prompt('Masukkan nomor soal: ');
switch (soal) {
  case '1':
    const angka = parseInt(prompt('Masukkan angka: '));

    for (let urutan_angka = 1; urutan_angka <= 10; urutan_angka++) {
      console.log(`${angka} x ${urutan_angka} = ${angka * urutan_angka}`);
    }
    break;
  case '2':
    const kata = prompt('Masukkan satu kata: ');
    const normalisasi_kata = kata.toLowerCase();
    let balik_kata = normalisasi_kata.split('').reverse().join('');
    if (balik_kata === normalisasi_kata) {
      console.log(`kata ${kata} adalah kata palindrom`);
    } else {
      console.log(`Kata ${kata} bukan kata palindrom`);
    }
    break;
  case '3':
    const centimeter = 9;
    console.log(centimeter / 100000);
    break;
  case '4':
    const angka_ke_matauang = parseInt(prompt('Masukkan angka: '));
    console.log(
      new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(angka_ke_matauang)
    );
    break;
  case '5':
    const kata = 'Hello World';
    const hapus = 'ell';

    console.log(kata.replace(hapus, ''));

    break;
  case '6':
    break;
  case '7':
    break;
  default:
    console.log('Nomor soal salah');
    break;
}
