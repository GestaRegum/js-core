function promiseAll(promises) {
  return promises.reduce((acc, curr) => {
    return acc.then((results) => {
      return curr.then((result) => {
        return [...results, result];
      });
    });
  }, Promise.resolve([]));
  // Пишите код здесь
}
export { promiseAll };
// Для запуска теста вводим в терминале команду: npm run test:current -- promiseAll.test.js
