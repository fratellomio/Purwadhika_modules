function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const input = 5;

const result = factorial(input);
console.log(result);

function factorial2(x) {
  res = 1;
  for (let i = 1; i <= x; i++) {
    res *= i;
  }
  return res;
}

const result2 = factorial2(input);
console.log(result2);
