const defaultTo = (value, defaultValue) => {
  if (isNaN(value) || value === null || value === undefined) {
    return defaultValue;
  } else {
    return value;
  }
};

module.exports = defaultTo;

// Для запуска теста вводим в терминале команду: npm run test:current -- defaultTo.test.js
