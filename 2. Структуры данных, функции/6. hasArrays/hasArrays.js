const hasArrays = (values) => {
  console.log(values)
  for (let i = 0; i < values.length; i++) {
    if (Array.isArray(values[i])) {
      return true
    }
  }
  return false
  
  // Пишите код здесь
};

export { hasArrays };
// Для запуска теста вводим в терминале команду: npm run test:current -- hasArrays.test.js
