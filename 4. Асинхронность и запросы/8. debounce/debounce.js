const debounce = (fn, delay) => {
  let timeout;

  return function (...args) {
    let context = this;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };

  // Пишите код здесь
};

export { debounce };
// Для запуска теста вводим в терминале команду: npm run test:current -- debounce.test.js
