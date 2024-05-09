const moveToStart = (arr, n) => {
  let rearrangedArr = arr.slice();;
  let newArr;
  if (arr.length <= n) {
    return arr;
  } else {
    for (let i = 0; i < n; i++) {
      newArr = rearrangedArr.pop(1);
      rearrangedArr.unshift(newArr);
      console.log(rearrangedArr);
    }
    
return rearrangedArr;
  }
  

};

export { moveToStart };
// Для запуска теста вводим в терминале команду: npm run test:current -- moveToStart.test.js
