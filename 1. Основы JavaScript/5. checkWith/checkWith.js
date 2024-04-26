const checkWith = (value, checkFunc) => {
  let a = checkFunc(value);
  return Boolean(a);
};

export { checkWith };
// Для запуска теста вводим в терминале команду: npm run test:current -- checkWith.test.js
