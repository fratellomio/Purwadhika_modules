//brute force
console.time();
function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
console.timeEnd();
console.log(checkDuplicate([1, 2, 3, 1]));

//optimize with extra memory
console.time();
function checkDuplicate(arr) {
  const uniqueData = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (uniqueData.has(arr[i])) return true;
    else uniqueData.add(arr[i]);
  }
  return false;
}
console.timeEnd();
console.log(checkDuplicate([1, 2, 3, 1]));

//optimize without extra memory
console.time();
function checkDuplicate(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}
console.timeEnd();
console.log(checkDuplicate([1, 2, 3, 1]));
