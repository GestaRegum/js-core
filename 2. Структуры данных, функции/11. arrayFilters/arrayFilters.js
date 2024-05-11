const inRange = (a, b) => {
return function (x) {
  return a <= x && b >= x
}
// Пишите код здесь
};

const inArray = (arr) => {
 return function(item) {
 return arr.includes(item)
 }
  // Пишите код здесь
};

const notInArray = (arr) => {
  return function(item) {
   return !arr.includes(item)
    
  // Пишите код здесь
};
}
export { inArray, inRange, notInArray };
// Для запуска теста вводим в терминале команду: npm run test:current -- arrayFilters.test.js
