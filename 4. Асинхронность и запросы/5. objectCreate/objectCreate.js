Object.create = function (proto, propertiesObject = {}) {
  if (proto !== Object(proto) && proto !== null) {
    throw new TypeError();
  }

  var newObj = {};
  Object.setPrototypeOf(newObj, proto);

  if (propertiesObject !== undefined) {
    Object.defineProperties(newObj, propertiesObject);
  }

  return newObj;
  // Пишите код здесь
};
// Для запуска теста вводим в терминале команду: npm run test:current -- objectCreate.test.js
