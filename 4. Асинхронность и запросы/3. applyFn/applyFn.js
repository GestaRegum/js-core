class ExecutionError {
  constructor(name, err) {
      this.stack = err.stack;
      this.name = name;
      this.err = err;
  }

  getArgData() {
      return this.name;
  }
  // Пишите код здесь
}

function applyFn(dataArr, callback) {
  let succeeded = [];
  let errors = [];

  for (let key of dataArr) {
      try {
          let result = callback(key);
          succeeded.push(result);
      } catch (err) {
          let result = new ExecutionError(key, err);
          errors.push(result);
      }
  }

  let obj = {
      succeeded: succeeded,
      errors: errors,
  };

  return obj;
  // Пишите код здесь
}

export { ExecutionError, applyFn };
// Для запуска теста вводим в терминале команду: npm run test:current -- applyFn.test.js
