import { getUsersIds, getUserInfo } from "./db";

function getUsersInfo(callback) {
  getUsersIds((id) => {
    const users = [];
    let length = id.length;

    id.forEach((id, index) => {
      getUserInfo(id, (userInfo) => {
        users[index] = userInfo;
        console.log(users);
        length -= 1;

        if (length === 0) {
          callback(users);
        }
      });
    });
  });

  // Пишите код здесь
}

export { getUsersInfo };
// Для запуска теста вводим в терминале команду: npm run test:current -- getUsersInfo.test.js
