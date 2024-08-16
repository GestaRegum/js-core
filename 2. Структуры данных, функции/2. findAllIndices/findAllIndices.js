function findAllIndices(arr, value) {

  let evenOrOdd = arr.reduce((acc, cur, index) => {
    if(cur === value) {
      acc.push(index)
    }
    return acc
  },[])

    return evenOrOdd
};

export { findAllIndices };
// Для запуска теста вводим в терминале команду: npm run test:current -- findAllIndices.test.js
