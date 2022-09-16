const arr = [1, 2, 3, 4, 3];
function cari(arr) {
  let number = arr[0];
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!map[value]) {
      map[value] = 1;
    } else {
      map[value] += 1;
    }
    if (map[number] < map[value]) number = value;
  }
  console.log(map);
  return {
    number: number,
    banyak: map[number],
  };
}
console.log(cari(arr));
