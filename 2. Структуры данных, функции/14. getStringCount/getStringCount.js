function getStringCount(object) {

  if (typeof object == 'string') return 1;

  if (!object) return 0;

  return Object.values(object).reduce((acc, cur) => acc + getStringCount(cur), 0);
}
  // Пишите код здесь


export { getStringCount };
// Для запуска теста вводим в терминале команду: npm run test:current -- getStringCount.test.js
