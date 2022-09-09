class Employee {
  constructor() {
    this.company = 'Purwadhika';
  }
}

class fullTimeEmployee extends Employee {
  constructor(name) {
    super();
    this.name = name;
    this.salaryPerHour;
    this.totalSalary;
  }

  setInfo(name) {
    this.name = name;
  }

  setSalary(hour) {
    this.hour = hour;
    if (this.hour > 6) {
      this.salaryPerHour = 75000;
    } else {
      this.salaryPerHour = 100000;
    }

    this.totalSalary = this.salaryPerHour * this.hour;
  }
}

class parttimeEmployee extends Employee {
  constructor() {
    super();
    this.name;
    this.salaryPerHour;
    this.totalSalary;
  }
  setInfo(name) {
    this.name = name;
  }

  setSalary(hour) {
    this.hour = hour;
    if (this.hour > 6) {
      this.salaryPerHour = 30000;
    } else {
      this.salaryPerHour = 50000;
    }

    this.totalSalary = this.salaryPerHour * this.hour;
  }
}

const employee1 = new fullTimeEmployee();
const employee2 = new parttimeEmployee();
employee1.setInfo('Agung');
employee1.setSalary(5);
employee1.setSalary(3);
employee2.setInfo('Rizka');
employee2.setSalary(7);
console.log(employee1);
console.log(employee2);
