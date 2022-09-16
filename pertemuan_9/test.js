let arr = [
  'book',
  true,
  [1, 'banana'],
  null,
  ['false', [2, NaN], false, ['clock', 0]],
  NaN,
  false,
  [true],
];

console.log(Boolean(arr[4][3][0]));
