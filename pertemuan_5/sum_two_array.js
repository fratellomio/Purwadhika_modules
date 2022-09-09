const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

function sum(array1, array2) {
  let sum = [];
  for (let i = 0; i < array1.length; i++) {
    sum.push(array1[i] + array2[i]);
  }
  return sum;
}

console.log(sum(array1, array2));
