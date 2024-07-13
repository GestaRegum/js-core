const fileSizes = {
  testFile1: 65,
  testFile2: 48,
};

function getFileSize(filename, cb) {
  setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
  getFileSize(filename1, (fileSize1) => {
    getFileSize(filename2, (fileSize2) => {
      if (typeof fileSize2 === "number") {
        cb(fileSize1 + fileSize2);
      } else {
        cb(null, Error("not found"));
      }
    });
  });
}

export { getFileSize, sumFileSizes, fileSizes };
// Для запуска теста вводим в терминале команду: npm run test:current -- sumFileSizes.test.js
