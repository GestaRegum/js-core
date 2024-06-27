function getDaysBetweenDates(a, b) {
  try {
    if (b === undefined) {
      throw new TypeError()
    }
    
    if (a === null || b === null) {
      return NaN
    }

    let dateA = new Date(a)
    let dateB = new Date(b)

    let result = (dateB - dateA)/(86400000)
    return Math.trunc(result)
  } catch (err) {
    throw err
  }
  // Пишите код здесь
}

export { getDaysBetweenDates };
// Для запуска теста вводим в терминале команду: npm run test:current -- getDaysBetweenDates.test.js
