const tebak = 3;

let gacha = Math.floor(Math.random() * 6);
//let gacha = Math.ceil(Math.random() * 5);

while (gacha == 0) {
  gacha = Math.floor(Math.random() * 6);
}

console.log(`angka tebakan: ${tebak}`);
console.log(`angka gacha: ${gacha}`);

if (tebak == gacha) {
  console.log('Congrats!!!');
} else {
  console.log('BOOOOO');
}
