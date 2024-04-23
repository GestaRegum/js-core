function compareWithPrecision(a, b, precision) {
  let c = a - b;
  if (a > 0 && b > 0) {
    if (c <= precision) {
      return true;
    } else {
      return false;
    }
  } else if (a < 0 && b < 0) {
    if (Math.abs(c) <= precision) {
      return true;
    } else {
      return false;
    }
  } else if (a < 0 || b < 0) {
    if (Math.abs(c) <= precision) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports = compareWithPrecision;

// Для запуска теста вводим в терминале команду: npm run test:current -- compareWithPrecision.test.js
