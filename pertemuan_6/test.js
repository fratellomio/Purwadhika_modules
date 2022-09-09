class Student {
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
    this.age = new Date(age);
    this.score = score;
  }
}

class Students {
  constructor() {
    this.students = [];
  }

  newStudent(name, email, age, score) {
    let s = new Student();
    s.setStudentInfo(name, email, age, score);
    this.students.push(s);
    return s;
  }

  get allStudents() {
    return this.students;
  }

  get numberOfStudents() {
    return this.students.length;
  }
}

let sekolah = new Students();
sekolah.newStudent('Agung', 'agung@email.com', '08/29/2000', 80);
sekolah.newStudent('Rizka', 'rizka@email.com', '09/09/2001', 60);

console.log(sekolah.allStudents);
function compare(input) {
  let highest = Math.max(5, 10);
}
