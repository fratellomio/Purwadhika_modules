function romawikeAngka(input) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let res = 0;

  for (let i = 0; i < input.length; i++) {
    const awal = roman[input[i]];
    const akhir = roman[input[i + 1]];
    if (awal < akhir) {
      res += akhir - awal;
      i++;
    } else {
      res += awal;
    }
  }

  return console.log(res);
}

romawikeAngka('XIV');
