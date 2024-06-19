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
  if (obj == null || typeof obj !== "object") {
      return true;
  }

  if (Object.getOwnPropertyNames(obj).length > 0 || Object.getOwnPropertySymbols(obj).length > 0) {
      return false;
  }

  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
      if (Object.getOwnPropertyNames(proto).length > 0 || Object.getOwnPropertySymbols(proto).length > 0) {
          return false;
      }
      proto = Object.getPrototypeOf(proto);
  }

  return true;
}

export { isEmpty, isEmptyWithProtos };
// npm run test:current -- isEmpty.test.js
