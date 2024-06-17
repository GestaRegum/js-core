const merge = (...objs) => {
  return objs.reduce((acc, obj) => {
    if (typeof obj === "object") {
      return { ...acc, ...obj };
  }
  return acc
  }, {});
  // Пишите код здесь
};

export { merge };
// Для запуска теста вводим в терминале команду: npm run test:current -- merge.test.js
