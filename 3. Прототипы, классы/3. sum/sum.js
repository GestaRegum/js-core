const sum = (...nums) => {
    return nums.reduce((acc, current) => {
        const number = Number(current);
        if (!isNaN(number)) {
            return acc + number;
            }
        return acc;
    }, 0);

    // Пишите код здесь
};

export { sum };
// Для запуска теста вводим в терминале команду: npm run test:current -- sum.test.js
