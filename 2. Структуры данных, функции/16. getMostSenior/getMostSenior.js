const getMostSenior = (humans) => {
 if (humans === null || humans === undefined) {
  return []
 }
 
  let maxAge = humans.reduce((acc, cur) => (cur.age > acc ? cur.age : acc), 0);

  
  
    let res = humans.filter(item => maxAge && item.age === maxAge);
   

    return res;

  // Пишите код здесь
};

export { getMostSenior };
// Для запуска теста вводим в терминале команду: npm run test:current -- getMostSenior.test.js
