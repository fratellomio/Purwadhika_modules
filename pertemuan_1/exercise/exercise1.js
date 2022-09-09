const prompt = require('prompt-sync')();
console.log(
  'Apa yang ingin dihitung? \n 1. Luas \n 2. Keliling \n 3. diameter, keliling, dan luas lingkaran \n 4. Sudut segitiga berdasarkan dua sudut yang diketahui \n 5. Jarak hari berdasarkan dua tanggal \n 6. Konverter hari ke tahun, bulan, dan tanggal'
);
const pilihan = prompt();
switch (pilihan) {
  case '1':
    // Write a code to find area of rectangle.
    const panjang = prompt('Masukkan panjang persegi: ');
    const lebar = prompt('Masukkan lebar persegi: ');
    const luas = panjang * lebar;
    console.log(`Luas persegi adalah: ${luas}`);
    break;
  case '2':
    // Write a code to find perimeter of rectangle.
    const panjang2 = parseInt(prompt('Masukkan panjang persegi: '));
    const lebar2 = parseInt(prompt('Masukkan lebar persegi: '));
    const keliling = 2 * (panjang2 + lebar2);
    console.log(`keliling persegi adalah: ${keliling}`);
    break;
  case '3':
    // Write a code to find diameter, circumference and area of a circle.
    const jari = parseInt(prompt('Masukkan jari-jari lingkaran: '));
    const diameter = jari * 2;
    const keliling_lingkaran = Math.PI * jari * 2;
    const luas_lingkaran = Math.PI * Math.pow(jari, 2);
    console.log(`Diameter lingkaran adalah ${diameter}
    Keliling lingkaran adalah ${keliling_lingkaran.toFixed(2)}
    Luas lingkaran adalah ${luas_lingkaran.toFixed(2)}`);
    break;
  case '4':
    // Write a code to find angles of triangle if two angles are given.
    const sudut1 = parseInt(prompt('Masukkan sudut pertama yang diketahui: '));
    const sudut2 = parseInt(prompt('Masukkan sudut kedua yang diketahui: '));
    const sudut3 = 180 - (sudut1 + sudut2);
    console.log(`Sudut ketiga adalah ${sudut3}`);
    break;
  case '5':
    //Write a code to get difference between dates in days
    const input_tanggal1 = prompt(
      'Masukkan tanggal pertama dengan format bulan/tanggal/tahun: '
    );
    const input_tanggal2 = prompt(
      'Masukkan tanggal kedua dengan format bulan/tanggal/tahun: '
    );
    const tanggal1 = new Date(input_tanggal1);
    const tanggal2 = new Date(input_tanggal2);
    const perbedaan = tanggal2 - tanggal1;
    const perbedaan_hari = perbedaan / (24 * 60 * 60 * 1000);
    //1 day  = 86400000 miliseconds
    console.log(perbedaan_hari + ' hari');
    break;
  case '6':
    //Write a code to convert days to years, months and days
    function hari_konverter(jumlah_hari) {
      const tahun = Math.floor(jumlah_hari / 365);
      const bulan = Math.floor((jumlah_hari % 365) / 30);
      const hari = Math.floor((jumlah_hari % 365) % 30);

      const hasil = `${tahun} Tahun, ${bulan} Bulan, ${hari} Hari`;
      return hasil;
    }
    const hari_input = prompt('Masukkan jumlah hari: ');
    const hitung_hari = hari_konverter(hari_input);
    console.log(hitung_hari);
    break;
  default:
    break;
}
