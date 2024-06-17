const unique = (arr) => {

  let result = new Set(arr)
  console.log(result)
  

 return Array.from(result)
  // Пишите код здесь
};

export { unique };
// npm run test:current -- unique.test.js