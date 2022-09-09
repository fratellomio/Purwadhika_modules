const arr = [1, 4, 2, 3, 5];

function sort_and_averange(input) {
  let lowest, highest, average;
  const sort_array = input.sort((a, b) => a - b);
  lowest = sort_array[0];
  highest = sort_array[sort_array.length - 1];
  average = input.reduce((a, b) => a + b) / input.length;

  return console.log(
    `Lowest: ${lowest}
Highest: ${highest}
Average: ${average}`
  );
}

let min = Math.min(...arr);
let max = Math.max(...arr);

console.log(min, max);

sort_and_averange(arr);
