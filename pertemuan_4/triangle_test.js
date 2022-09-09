function bmi(weight, height) {
  let result = '';
  let calculate = weight / Math.pow(height, 2);
  if (calculate < 18.5) {
    result = 'less weight';
  } else if (calculate >= 18.5 && calculate <= 24.9) {
    result = 'ideal';
  } else if (calculate >= 25.0 && calculate <= 29.9) {
    result = 'overweight';
  } else if (calculate >= 30.0 && calculate <= 39.9) {
    result = 'very overweight';
  } else if (calculate > 39.9) {
    result = 'obesity';
  } else {
    result = 'error';
  }
  return `Berat: ${weight}
Tinggi: ${height}
maka nilai BMI: ${calculate}
hasilnya adalah ${result}`;
}

console.log(bmi(60, 1.7));
//console.log(bmi(60, 160));
