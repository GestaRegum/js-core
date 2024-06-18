function isEmpty(obj) {
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          return false;
      }
  }
  return true;
  // Пишите код здесь
}

function isEmptyWithProtos(obj) {
  return (obj.__proto__ === undefined && obj.__proto__ !== null);

  // Пишите код здесь
}

export { isEmpty, isEmptyWithProtos };
// npm run test:current -- isEmpty.test.js
