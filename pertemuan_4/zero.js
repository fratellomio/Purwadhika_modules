const zeroPad = (num, places) => String(num).padStart(places, '0');
//console.log(zeroPad(123, 2));

let a = '21';

if (a.length == 1) {
  console.log(zeroPad(1, 2));
} else {
  console.log('puluhan');
}
