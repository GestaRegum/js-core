function findAllIndices(arr, value) {
  let evenOrOdd = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value ) {
        evenOrOdd.push(i);
      } 
      console.log(evenOrOdd)
    }
    return evenOrOdd
};

export { findAllIndices };
// Для запуска теста вводим в терминале команду: npm run test:current -- findAllIndices.test.js
