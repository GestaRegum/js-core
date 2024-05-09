const getField = (data, field) => {
  
    let output = [];
    if (data === undefined) {
      return output
    }
    for (let i = 0; i < data.length; i++) {
        output.push(data[i][field]);
    }
    return output;
};

export { getField };
// Для запуска теста вводим в терминале команду: npm run test:current -- getField.test.js
