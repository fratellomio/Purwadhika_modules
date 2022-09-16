import Order from './order.js';

const order1 = new Order();
const order2 = new Order();
const order3 = new Order();

order1.setTable(1);
order1.setOrder('Odeng', 3);
order1.setOrder('Sosis', 2);
order1.setOrder('Kopi Susu', 2);
//order1.processing();

console.log(order1);

order2.setTable(2);
order2.setOrder('Odeng', 1);
order2.setOrder('Kopi Susu', 1);
//order2.processing();
console.log(order2);

order3.setTable(3);
order3.setOrder('Es Teh', 1);
//order3.processing();
console.log(order3);

let i = 1;
let banyakOrder = 3;

while (i <= banyakOrder) {
  let queue = new Promise((done, cancel) => {
    let random = Math.floor(Math.random() * 15 + 1);

    if (random < 10)
      done('order ' + i + ' will be done in ' + random + ' minutes');
    else
      cancel(
        'order ' +
          i +
          ' is  canceled because it wil be done in ' +
          random +
          ' minutes'
      );
  });

  const service1 = async () => {
    try {
      let tes = await queue;
      console.log(tes);
    } catch (error) {
      console.log(error);
    }
  };

  service1();
  i++;
}
