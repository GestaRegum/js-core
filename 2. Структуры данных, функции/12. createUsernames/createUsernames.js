const createUsernames = (data) => {
  let getUsername = '';
  
   const arr = Array.from(data);

   for (let i = 0; i < arr.length; i++) {
    const {firstName, lastName, age} = arr[i]
    getUsername = firstName.toLowerCase() + lastName[0].toLowerCase() + (new Date().getFullYear() - age);
    arr[i].username = getUsername;
  
  }

   return arr

  // Пишите код здесь
};

export { createUsernames };
// Для запуска теста вводим в терминале команду: npm run test:current -- createUsernames.test.js
