const sum = (...nums) => {
let arrNums = [...nums]
let sum = 0
if (arrNums[0] === undefined) {
  return 0
}

for (let i = 0; i < arrNums.length; i++) {



  
  if (typeof arrNums[i] !== 'string' && typeof arrNums[i] !== 'boolean') {
     console.log(typeof arrNums[i])
     sum = sum + 0
  }

  sum = sum + valeuOf(arrNums[i])
}

return sum

  // Пишите код здесь
}

export { sum };
// Для запуска теста вводим в терминале команду: npm run test:current -- sum.test.js
