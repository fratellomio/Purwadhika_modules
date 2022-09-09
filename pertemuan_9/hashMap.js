function a() {
  return function () {
    return {
      age: [1, 'asd', true],
      list: [{ a: 'umbrella' }],
    };
  };
}

console.log(a()().list[0].term);
