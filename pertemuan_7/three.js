one = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 2', email: 'student2@mail.com' },
];

two = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 3', email: 'student3@mail.com' },
];

function mergeAndFilter(array1, array2) {
  let mergeArray = [...array1, ...array2];

  result = mergeArray.filter(
    (value, index, self) =>
      index ===
      self.findIndex((a) => a.name == value.name && a.email == value.email)
  );

  return result;
}

console.log(mergeAndFilter(one, two));

let mergeArray = [...one, ...two];
console.log(mergeArray);

function removeDuplicates(array, property) {
  let newArray = [];
  let cari = {};

  for (let i in array) {
    cari[array[i][property]] = array[i];
  }

  for (i in cari) {
    newArray.push(cari[i]);
  }
  return newArray;
}

newArray = removeDuplicates(mergeArray, 'name');
console.log(newArray);
