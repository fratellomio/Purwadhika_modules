// Bubble sort

function bblSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547];

bblSort(arr);

//srt js

let arr2 = [234, 43, 55, 63, 5, 6, 235, 547];
arr2.sort((a, b) => a - b);
console.log(arr2);
