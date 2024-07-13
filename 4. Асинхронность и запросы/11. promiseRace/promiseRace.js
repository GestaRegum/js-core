function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let promis of promises) {
      Promise.resolve(promis).then(resolve, reject);
    }
  });

  // Пишите код здесь
}

export { promiseRace };
// Для запуска теста вводим в терминале команду: npm run test:current -- promiseRace.test.js
