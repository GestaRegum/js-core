const throttle = (fn, delay) => {
  let timeout = true;

  return function (...arg) {
    if (timeout) {
      console.log("Запустили");
      timeout = false;
      fn.apply(this, arg);
    } else {
      console.log("нужно подождать");
      timeout = setTimeout(() => {
        fn.apply(this, arg);
      }, delay);
    }
  };
  // Пишите код здесь
};

export { throttle };
// Для запуска теста вводим в терминале команду: npm run test:current -- throttle.test.js
