function myFunc(arr) {
  let res;
  for (i of arr) {
    res = res ^ arr[i];
    console.log(res);
  }
  return res;
}

console.log(myFunc([4]));
