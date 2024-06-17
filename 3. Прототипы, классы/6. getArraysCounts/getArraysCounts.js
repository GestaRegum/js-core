const getArraysCounts = (arr) => {

  const result = new Map();

  for (const item of arr) {
      if (result.has(item)) {
        result.set(item, result.get(item) + 1);
      } else {
        result.set(item, 1);
      }
  }
  

  return result;

  // Пишите код здесь
};

export { getArraysCounts };
// npm run test:current -- getArraysCounts.test.js