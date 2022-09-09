// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// const swapped = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
// console.log(swapped);

array1 = [{ name: 'David', age: 20 }];
const [david] = array1;
console.log(david);
const obj = [
  { foo: 'bar', baz: 42 },
  { name: 'David', age: 20 },
];
console.log(Object.entries(obj));
