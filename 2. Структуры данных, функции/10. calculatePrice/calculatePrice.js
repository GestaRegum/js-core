const calculatePrice = (orders) => {
let result = 0;
  if (orders === undefined || orders === null || Array.isArray(orders) === false ) {
    return result;
  } else {
  
  result = orders.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  }
return result;

};

export { calculatePrice };
// Для запуска теста вводим в терминале команду: npm run test:current -- calculatePrice.test.js
