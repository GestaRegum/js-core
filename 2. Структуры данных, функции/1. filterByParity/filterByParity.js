const filterByParity = (numbers, parity) => {
 let evenOrOdd = [];

  if (numbers === '') {
    return numbers;
  }
 
  
  if (parity === 'even') {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenOrOdd.push(numbers[i]);
      } 
      console.log(evenOrOdd)
    }
  }
  
  if (parity === 'odd') {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        evenOrOdd.push(numbers[i]) ;
        } 
      console.log(evenOrOdd)
    }
  }

return evenOrOdd;
  // Пишите код здесь
};

export { filterByParity };
// Для запуска теста вводим в терминале команду: npm run test:current -- filterByParity.test.js
