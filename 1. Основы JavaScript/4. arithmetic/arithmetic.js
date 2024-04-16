const arithmetic = (a, b, operator) => {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default: {
      return NaN;
    }
  }
  // Пишите код здесь
};

export { arithmetic };
// Для запуска теста вводим в терминале команду: npm run test:current -- arithmetic.test.js
