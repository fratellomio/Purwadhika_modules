const kata = 'hello world';

const kata_baru = kata[0].toUpperCase() + kata.substring(1);

console.log(kata_baru);

const mySentence = 'freeCodeCamp is an awesome resource';

const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
  letter.toUpperCase()
);
console.log(finalSentence);

let balik_kata = '';
for (let index_kata = kata.length - 1; index_kata >= 0; index_kata--) {
  balik_kata += kata[index_kata];
}
console.log(balik_kata);
