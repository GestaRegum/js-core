export const sequenceSum = (begin, end) => {
    if (begin === end) {
      return end;
    } else if (begin < end){
       return +end + sequenceSum (begin, end - 1);
    } else {
      return NaN
   }
  

  // Пишите код здесь
};
// Для запуска теста вводим в терминале команду: npm run test:current -- sequenceSum.test.js
