let text = 'Thed best things in life are free2';
let pattern = /\d/;
let hasNumber = pattern.test(text);
let result = hasNumber ? 'yes' : 'no';
console.log(result);
