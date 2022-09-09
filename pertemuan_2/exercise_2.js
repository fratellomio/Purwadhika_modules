const prompt = require('prompt-sync')();

console.log(`Masukkan nomor soal
1. Write a code to convert celsius to fahrenheit
2. Write a code to check whether the number is odd or even
3. Write a code to check whether the number is prime number or not
4. Write a code to find the sum of the numbers 1 to N
5. Write a code to find factorial of a number
6. Write a code to print the first N fibonacci numbers`);

const soal = prompt();

switch (soal) {
  case '1':
    console.log('Nilai Celcius: ');
    const celcius = prompt();
    const fahrenheit = celcius * 1.8 + 32;
    console.log(
      `${celcius} derajat celcius sama dengan ${fahrenheit} derajat fahrenheit`
    );
    break;
  case '2':
    const angka_ganjil_genap = parseInt(prompt('Masukkan angka: '));
    if (angka_ganjil_genap % 2 == 0) {
      console.log(`Angka ${angka_ganjil_genap} adalah angka genap `);
    } else {
      console.log(`Angka ${angka_ganjil_genap} adalah angka ganjil `);
    }
    break;
  case '3':
    const angka_prima = parseInt(prompt('Masukkan angka: '));
    let bilangan_prima = true;

    if (angka_prima === 1 || angka_prima <= 0) {
      console.log('bukan angka prima');
    } else if (isNaN(angka_prima)) {
      console.log('input bukanlah angka');
    } else if (angka_prima > 1) {
      for (let cari = 2; cari < angka_prima; cari++) {
        if (angka_prima % cari == 0) {
          bilangan_prima = false;
          break;
        }
      }
      if (bilangan_prima) {
        console.log(`${angka_prima} adalah bilangan prima`);
      } else {
        console.log(`${angka_prima} bukan bilangan prima`);
      }
    }
    break;
  case '4':
    let hasil = 0;
    let banyak_angka = parseInt(
      prompt('Masukkan banyak angka yang ingin dihitung: ')
    );
    for (let angka_awal = 1; angka_awal <= banyak_angka; angka_awal++)
      hasil += angka_awal; // hasil = hasil + angka_awal
    console.log(
      `Jumlah angka dari 1 sampai dengan ${banyak_angka} adalah ${hasil}`
    );
    break;
  case '5':
    let hasil_faktorial = 1;
    let angka_faktorial = parseInt(prompt('Masukkan angka: '));
    for (
      let angka_awal_faktorial = 2;
      angka_awal_faktorial <= angka_faktorial;
      angka_awal_faktorial++
    )
      hasil_faktorial *= angka_awal_faktorial;
    console.log(`Faktorial dari ${angka_faktorial} adalah ${hasil_faktorial}`);
    break;
  case '6':
    function fibonacci(n) {
      let f1 = 0,
        f2 = 1,
        i;
      if (n < 1) return;
      console.log(f1);
      for (i = 1; i < n; i++) {
        console.log(f2);
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
      }
    }
    let banyak_fibonacci = parseInt(
      prompt('Masukkan banyak deret fibonacci yang ingin ditampilkan: ')
    );
    fibonacci(banyak_fibonacci);
    break;
  default:
    console.log('Nomor soal salah');
}
