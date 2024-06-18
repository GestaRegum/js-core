function invert(obj) {
  let result = {};

  Object.entries(obj).forEach(([key, i]) => {
      return (result[i] = key);
  });

  return result;

  // Пишите код здесь
}

export { invert };
// Для запуска теста вводим в терминале команду: npm run test:current -- invert.test.js
