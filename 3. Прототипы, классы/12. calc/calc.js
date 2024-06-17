class Calc {

  constructor (a = 0) {
    this.num = a
  }

  add (b) {
  
    return new Calc (this.num + b)
  }

  sub (b) {
  
    return new Calc (this.num - b)
  }

  result () {
    return this.num
}

// Пишите код здесь
}

export { Calc };
// Для запуска теста вводим в терминале команду: npm run test:current -- calc.test.js
