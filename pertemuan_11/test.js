function findOutlier(integers) {
  for (i of integers) {
    if (i % 2 === 0) {
      return i;
    }
  }
}

console.log(findOutlier([1, 2, 3, 5]));
