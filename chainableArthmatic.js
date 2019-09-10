const init = num => {
  return new ChainableArtimatic(num);
};

class ChainableArtimatic {
  constructor(num) {
    this._value = num;
  }

  value() {
    return this._value;
  }

  add(num) {
    this._value = this._value + num;
    return this;
  }
}

console.log(
  init(3)
    .add(4)
    .add(2)
    .value()
);
