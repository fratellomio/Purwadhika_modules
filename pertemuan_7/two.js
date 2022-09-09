one = {
  a: 1,
  b: 2,
};
two = {
  a: 1,
  b: 3,
};

function compare(object1, object2) {
  let res = {};
  for (let property in object1) {
    if (
      Object.hasOwn(object2, property) &&
      object1[property] === object2[property]
    ) {
      res[property] = object1[property];
    }
  }
  return res;
}

console.log(compare(one, two));
