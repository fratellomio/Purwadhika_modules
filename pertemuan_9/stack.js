class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }
  #isFull() {
    return this.#container.length >= this.#maxSize;
  }
  #isEmpty() {
    return this.#container.length === 0;
  }
  push(element) {
    this.#container.push(element);
  }
  pop() {
    this.#container.pop();
  }
  getElements() {
    return this.#container;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);

console.log(stack.getElements());

stack.pop();
console.log(stack.getElements());
