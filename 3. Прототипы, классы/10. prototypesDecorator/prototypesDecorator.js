class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
}
function logCalls(target, key, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log('called'); 
    return originalMethod.apply(this, args);
  };

  return descriptor;
}
Object.defineProperty(Addition.prototype, 'add', logCalls(Addition.prototype, 'add', Object.getOwnPropertyDescriptor(Addition.prototype, 'add')));



// Пишите код здесь

export { Addition };
// Для запуска теста вводим в терминале команду: npm run test:current -- prototypesDecorator.test.js
