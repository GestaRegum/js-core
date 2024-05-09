function wrapInParagraph(text) {
 let textTest = [];

  let wordOnText = text.split('\u000A');
  console.log(wordOnText);
  if (wordOnText.length === 1) {
    textTest.push('<p>' + wordOnText + '</p>');
    return textTest.join()
  } else {

  for (let i = 0; i < wordOnText.length; i++) {
    textTest.push('<p>' + wordOnText[i] + '</p>');
    console.log(textTest);
    
  }

}
 return textTest.join('\u000A');

  // Пишите код здесь
}

module.exports = wrapInParagraph;

// Для запуска теста вводим в терминале команду: npm run test:current -- wrapInParagraph.test.js
