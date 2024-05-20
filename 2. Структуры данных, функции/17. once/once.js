const once = (fn) => {
 
  let firstCall = false;
  let value;
  return function () {
    if (!firstCall) {
      firstCall = true;
      value = fn.apply(this, arguments);
    } else if (firstCall) {
      return value;
      } else {
        try {
          value = fn.apply(this, arguments);
        } catch (err) {
          
        }
    
  };
  return value;
}
  
  // Пишите код здесь
};
 
export { once };
// Для запуска теста вводим в терминале команду: npm run test:current -- once.test.js
