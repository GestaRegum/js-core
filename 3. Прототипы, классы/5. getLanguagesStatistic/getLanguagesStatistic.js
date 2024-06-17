const getLanguagesStatistic = (data) => {
  

  
  return data
    .filter(statistic => statistic.year === 2023 && statistic.language !== undefined)
    .reduce((acc, cur) => {
      let sum = 1;
     if (acc[cur.language]) {
        acc[cur.language] = sum + 1 
     } else {
        acc[cur.language] = sum
     }
     return acc
    }, {})



  // Пишите код здесь
};

export { getLanguagesStatistic };
// Для запуска теста вводим в терминале команду: npm run test:current -- getLanguagesStatistic.test.js
