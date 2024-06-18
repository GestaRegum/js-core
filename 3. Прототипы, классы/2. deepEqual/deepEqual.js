function deepEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") {
      return obj1 === obj2;
  }
  const aKeys = Object.keys(obj1);
  const bKeys = Object.keys(obj2);
  if (aKeys.length !== bKeys.length) {
      return false;
  }
  return aKeys.every((key) => bKeys.includes(key) && deepEqual(obj1[key], obj2[key]));
  // Пишите код здесь
}

export { deepEqual };
// Для запуска теста вводим в терминале команду: npm run test:current -- deepEqual.test.js
