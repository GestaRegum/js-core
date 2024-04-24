function getLettersCount(str) {
  let calc = {};
  let letter = str.toLowerCase();
  for (let i = 0, l = str.length; i < l; i++) {
    let smallLetter = letter[i];

    if (!calc[smallLetter]) {
      calc[smallLetter] = 0;
    }

    calc[smallLetter]++;
  }

  return calc;
}
export { getLettersCount };
// Для запуска теста вводим в терминале команду: npm run test:current -- getLettersCount.test.js
