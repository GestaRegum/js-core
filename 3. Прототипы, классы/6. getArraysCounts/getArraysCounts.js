const getArraysCounts = (arr) => {
  const result = new Map();

  for (const item of arr) {
      result.set(item, (result.get(item) || 0) + 1);
  }

  return result;

  // Пишите код здесь
};

export { getArraysCounts };
// npm run test:current -- getArraysCounts.test.js
