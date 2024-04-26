function compareWithPrecision(a, b, precision) {
  let c = a - b;
  if (Math.abs(c) <= precision) {
    return true;
  } else {
    return false;
  }
}
module.exports = compareWithPrecision;

// Для запуска теста вводим в терминале команду: npm run test:current -- compareWithPrecision.test.js
