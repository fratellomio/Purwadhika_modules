class web_dev {
  constructor(kelas, lokasi, periode) {
    this.kelas = kelas;
    this.lokasi = lokasi;
    this.periode = periode;
  }
}

class student extends web_dev {
  constructor() {
    super();
    this.name;
    this.address;
    this.payment;
  }

  getInfo() {
    return this.name, this.address, this.payment;
  }

  setInfo(name, address, payment) {
    this.name = name;
    this.address = address;
    this.payment = payment;
  }
}

const student1 = new student();
student1.setInfo('Agung', 'Setia Budi', 'Full');

console.log(student1);
