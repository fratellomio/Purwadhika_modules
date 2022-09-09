function umur(input) {
  let bulan = Date.now() - input.getTime();
  var tanggal = new Date(bulan);

  return Math.abs(tanggal.getUTCFullYear() - 1970);
}

class student {
  constructor() {
    this.name; //string
    this.email; //string
    this.age; //date
    this.score; //number
  }

  setStudentInfo(name, email, age, score) {
    if (typeof name !== 'string') {
      throw new Error('Name should be a string');
    } else if (typeof email !== 'string') {
      throw new Error('email should be a string');
    } else if (!(age instanceof Date) && !isNaN(age)) {
      throw new Error('age should be a date');
    } else if (isNaN(score)) {
      throw new Error('score should be a number');
    }
    this.name = name;
    this.email = email;
    this.age = umur(new Date(age));
    this.score = score;
  }
}

const student1 = new student();
student1.setStudentInfo('Agung', 'agung@email.com', '08/29/1994', 90);
const student2 = new student();
student2.setStudentInfo('Rizka', 'rizka@email.com', '01/29/1994', 30);

function compare(a, b) {
  let highestScore = Math.max(a.score, b.score);
  let lowestScore = Math.min(a.score, b.score);
  let averageScore = (a.score + b.score) / 2;
  let score = {
    highest: highestScore,
    lowest: lowestScore,
    average: averageScore,
  };

  let highestAge = Math.max(a.age, b.age);
  let lowestAge = Math.min(a.age, b.age);
  let averageAge = (a.age + b.age) / 2;

  let age = {
    highest: highestAge,
    lowest: lowestAge,
    average: averageAge,
  };

  return {
    score: score,
    age: age,
  };
}

console.log(compare(student1, student2));
