function optionalChaining(obj, chain) {
  if (chain.length === 0) {
    return undefined
  }
  
  for (let i = 0; i < chain.length; i++) {
    if (obj) { 
      obj = obj[chain[i]]
    } else {
      obj = undefined
    }
  }
  return obj
  // Пишите код здесь
}

export { optionalChaining };

//Для запуска теста вводим в терминале команду: npm run test:current -- optionalChaining.test.js
