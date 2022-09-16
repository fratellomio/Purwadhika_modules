export default class Order {
  constructor() {
    this.table;
    this.orders = {};
    this.length = 0;
  }
  setTable(table) {
    this.table = table;
  }

  setOrder(order, quantity) {
    let counter = 0;
    if (quantity <= 0) {
    }
    if (quantity > 1) {
      for (let i = 0; i < quantity; i++) {
        counter++;
        this.orders[order] = counter;
        this.length++;
      }
    } else if (quantity == 1) {
      this.orders[order] = 1;
      this.length++;
    }
  }

  // processing = () => {
  //   let i = 1;
  //   while (i <= this.length) {
  //     let queue = new Promise((done, cancel) => {
  //       let random = Math.floor(Math.random() * 15 + 1);

  //       if (random < 10)
  //         done(
  //           'order ' +
  //             i +
  //             ': ' +
  //             Object.keys(this.orders)[i - 1] +
  //             ' will be done in ' +
  //             random +
  //             ' minutes'
  //         );
  //       else
  //         cancel(
  //           'order ' +
  //             i +
  //             ' is  canceled because it wil be done in ' +
  //             random +
  //             ' minutes'
  //         );
  //     });

  //     const service1 = async () => {
  //       try {
  //         let tes = await queue;
  //         console.log(tes);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     service1();
  //     i++;
  //   }
  // };
}
