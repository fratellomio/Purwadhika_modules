one = {
  firstName: 'Agung',
  lastName: 'Rizka',
};
two = {
  lastName: 'Rizka',
  firstName: 'Agung',
};
function compare(a, b) {
  const obj1Length = Object.keys(a).length;
  const obj2Length = Object.keys(b).length;

  if (obj1Length === obj2Length) {
    return Object.keys(a).every(
      (key) => Object.hasOwn(b, key) && b[key] === a[key]
    );
  }
  return false;
}

console.log(compare(one, two));
