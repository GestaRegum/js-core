function partition(array, callback) {

  let trueLine = [];
  let falseLine = [];

  if (callback === undefined) {
    for (let i = 0; i < array.length; i++) {
      if (Boolean(array[i]) === true) {
        trueLine.push(array[i])
      } else {
        falseLine.push(array[i]);
      }
    }
    return [trueLine, falseLine]
  } else {

    for (let i = 0; i < array.length; i++) {
    if (Boolean(callback(array[i])) === true) {
        trueLine.push(array[i]);
      } else {
        falseLine.push(array[i]);
      }
    }
 
return [trueLine, falseLine]

  }
}

export { partition };
// Для запуска теста вводим в терминале команду: npm run test:current -- partition.test.js
