class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.length = 0;
    this.products = {};
    this.total = 0;
    this.money = 0;
    this.change = 0;
  }

  add(product) {
    this.products[this.length] = product;
    this.length++;
  }

  calculate() {
    for (let i = 0; i < this.length; i++) {
      this.total += this.products[i].price;
    }
  }

  checkout(money) {
    this.money = money;
    if (money < this.total) {
      throw Error('Uang kurang');
    } else {
      this.change = money - this.total;
    }
  }
}

const sosis = new Product('sosis', 10000);
const odeng = new Product('odeng', 12000);
const kopi = new Product('kopi', 10000);

const transaction1 = new Transaction();

transaction1.add(sosis);
transaction1.add(odeng);
transaction1.calculate();
transaction1.checkout(30000);
console.log(transaction1);
