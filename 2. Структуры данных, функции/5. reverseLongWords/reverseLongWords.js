const reverseLongWords = (str, n) => {
  let strWord = str.split(' ');
  let reversWord = [];
  let newWord = [];

console.log(strWord)


  for (let i = 0; i < strWord.length; i++) {
    if (strWord[i].length >= n) {
       newWord = strWord[i].split('').reverse().join('');
    } else {
      newWord = strWord[i];
    }
   reversWord.push(newWord);
    }

return reversWord.join(' ');
  // Пишите код здесь
};

module.exports = reverseLongWords;

// Для запуска теста вводим в терминале команду: npm run test:current -- reverseLongWords.test.js
