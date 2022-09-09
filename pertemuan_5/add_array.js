function add_value(tambah) {
  let arr = [1, 2, 3];
  if (arr.includes(tambah) === false) {
    arr.push(tambah);
  }
  return console.log(arr);
}

add_value('asdsd');
