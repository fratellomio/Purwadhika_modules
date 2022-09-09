function buat_segitiga(tinggi) {
  let baris_baru, isi_baris;
  let segitiga = '';
  let hitung = 1;
  for (baris_baru = 1; baris_baru <= tinggi; baris_baru++) {
    for (isi_baris = 1; isi_baris <= baris_baru; isi_baris++) {
      if (hitung <= 9) {
        segitiga += `0${hitung} `;
      } else {
        segitiga += `${hitung} `;
      }
      hitung++;
    }
    segitiga += '\n';
  }
  return segitiga;
}

console.log(buat_segitiga(6));
