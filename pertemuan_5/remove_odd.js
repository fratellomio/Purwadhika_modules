let arr = [1, 2, 3, 4, 5, 6];

function remove_odd(arr) {
  let arr2 = [];
  let count = 0;
  arr.forEach((element) => {
    if (element % 2 == 0) {
      arr2[count] = element;
      count++;
    }
  });
  {
  }

  return console.log(arr, arr2);
}

remove_odd(arr);
