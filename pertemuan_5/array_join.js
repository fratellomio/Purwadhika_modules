const arr = ['a', 'b', 'c', 'd'];

const list = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});

console.log(list.format(arr));

function join_array(input) {
  let lastWord = input[input.length - 1];
  input.pop();

  return console.log(`${input.join(', ')} and ${lastWord}`);
}

join_array(arr);
