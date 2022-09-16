function maxProfit(harga) {
  let maxProfit = 0;

  for (i = 1; i < harga.length; i++)
    if (harga[i] > harga[i - 1]) maxProfit += harga[i] - harga[i - 1];
  return maxProfit;
}

let arr = [7, 1, 5, 3, 9, 4];

console.log(maxProfit(arr));
