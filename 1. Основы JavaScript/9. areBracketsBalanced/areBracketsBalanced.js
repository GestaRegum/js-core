const areBracketsBalanced = (str) => {
  let chars = str.split(""),
    stack = [],
    open = "(",
    close = ")",
    closeIndex,
    openIndex;
  // Проходимся по строке, проверяя каждый ее символ (п.4).
  for (let i = 0; i < chars.length; i++) {
    openIndex = open.indexOf(chars[i]);
    if (openIndex !== -1) {
      // Нашли открывающую скобку. Помещаем ее в стек (п.2).
      stack.push(openIndex);
      continue;
    }
    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {
      // Нашли закрывающую скобку. Проверяем ее соответствие открывающей (п.3).
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
        return false;
      }
    }
  }
  // Проверяем дисбаланс открытых/закрытых скобок (п.5).
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

export { areBracketsBalanced };
// Для запуска теста вводим в терминале команду: npm run test:current -- areBracketsBalanced.test.js
