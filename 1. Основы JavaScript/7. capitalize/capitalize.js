function capitalize(str) {
  let word = str.split(" ");
  console.log(word);
  let UpperText = [];
  for (let i = 0; i < word.length; i++) {
    var string = word[i][0].toUpperCase() + word[i].toLowerCase().slice(1);
    UpperText.push(string);
  }

  return UpperText.join(" ");
}

module.exports = capitalize;

// Для запуска теста вводим в терминале команду: npm run test:current -- capitalize.test.js
