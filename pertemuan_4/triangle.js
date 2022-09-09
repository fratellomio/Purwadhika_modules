function buat_segitiga(tinggi) {
  let baris_baru, isi_baris;
  let segitiga = '';
  for (baris_baru = 1; baris_baru <= tinggi; baris_baru++) {
    for (isi_baris = 1; isi_baris <= baris_baru; isi_baris++) {
      segitiga += '0' + isi_baris + ' ';
      console.log(isi_baris);
    }
    segitiga += '\n';
  }
  return segitiga;
}

console.log(buat_segitiga(9));
