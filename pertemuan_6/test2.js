class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
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

  add(product, quantity) {
    if (quantity <= 0) {
    }
    if (quantity > 1) {
      for (let i = 0; i < quantity; i++) {
        this.products[this.length] = product;
        this.length++;
      }
    } else if (quantity == 1) {
      this.products[this.length] = product;
      this.length++;
    }
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

const sosis = new Product('sosis', 10000, 3);
const odeng = new Product('odeng', 12000, 5);
const kopi = new Product('kopi', 10000, 2);

const transaction1 = new Transaction();

transaction1.add(sosis, 2);
transaction1.add(odeng, 3);
transaction1.add(sosis, 0);
transaction1.calculate();
transaction1.checkout(80000);
console.log(transaction1);
