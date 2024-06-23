function arrayToCsv(data) {
  try {
      const escapeString = (param) => {
          if (typeof param !== "string" && typeof param !== "number") {
              throw new Error("Unexpected value");
          }

          if (typeof param === "string") {
              if (param.includes(",") || param.includes('"')) {
                param = param.split('"').join('""');
                param = `"${param}"`;
              }
          }
          return param;
      };

      const csvRows = data.map((row) => row.map(escapeString).join(","));
      const csvString = csvRows.join("\n");
      return csvString;
  } catch (err) {
      throw err.message;
  }
}

export { arrayToCsv };
// Для запуска теста вводим в терминале команду: npm run test:current -- arrayToCsv.test.js
