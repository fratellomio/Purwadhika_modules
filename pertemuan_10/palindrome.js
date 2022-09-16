let p = 'race, car';
let balik_kata = '';
const arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
p = p.split('');
p = p.filter((letter) => {
  return arr.includes(letter);
});
p = p.join('');

for (let index_kata = p.length - 1; index_kata >= 0; index_kata--) {
  balik_kata += p[index_kata];
}

console.log(
  p === balik_kata ? `kata ${p} adalah palindrom` : `kata ${p} bukan palindrom`
);
