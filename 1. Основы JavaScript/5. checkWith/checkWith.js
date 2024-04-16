const checkWith = (value, checkFunc) => {
  let a = checkFunc(value);
  if (Boolean(a) === true) {
    return true;
  } else {
    return false;
  }
};

export { checkWith };
// Для запуска теста вводим в терминале команду: npm run test:current -- checkWith.test.js
