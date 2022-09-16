const arr = [1, 2, 3, 4, 3];
function cari(arr) {
  const rata_rata = Math.floor(arr.length / 2);
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    map[value] = map[value] + 1 || 1;
    if (map[value] > rata_rata) return value;
  }
  console.log(map);
  return false;
}
console.log(cari(arr));
