class Calc {
  constructor(a = 0) {
    this.num = a;
  }

  sum(a) {
    return new Calc(a)
  }

  add(b) {
    return this.sum(this.num + b)
  }

  sub(b) {
    return this.sum(this.num - b)
  }

  result() {
    return this.num;
  }
}

export { Calc };
// Для запуска теста вводим в терминале команду: npm run test:current -- calc.test.js
