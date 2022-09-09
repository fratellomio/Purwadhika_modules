const array = [2, 3, 5, 4, 1];

function sort_and_averange(input) {
  //min and max
  let minvalue = input[0];
  let maxvalue = input[0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] < minvalue) {
      minvalue = input[i];
    } else if (input[i] > maxvalue) {
      maxvalue = input[i];
    }
  }

  // average
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += input[i];
  }
  let avg = total / input.length;

  return console.log(
    `Lowest: ${minvalue}, Highest: ${maxvalue}, Average: ${avg}`
  );
}

sort_and_averange(array);
