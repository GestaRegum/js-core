async function promisesInSeries(asyncFns) {
  return asyncFns.reduce((acc, cur) => {
    return acc.then(cur);
  }, Promise.resolve());

  // Пишите код здесь
}

export { promisesInSeries };
// Для запуска теста вводим в терминале команду: npm run test:current -- promisesInSeries.test.js
