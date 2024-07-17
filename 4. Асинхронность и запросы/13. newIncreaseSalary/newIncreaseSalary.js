async function newIncreaseSalary() {
  try {
    const employees = await api.getEmployees();

    // Считаем среднюю зарплату
    const totalSalary = employees.reduce(
      (acc, employee) => acc + employee.salary,
      0,
    );
    const averageSalary = totalSalary / employees.length;

    let successfulUpdates = 0;
    let summarySalaries = 0;

    for (const employee of employees) {
      let newSalary = employee.salary;

      if (employee.salary < averageSalary) {
        newSalary = employee.salary * 1.2;
      } else {
        newSalary = employee.salary * 1.1;
      }

      try {
        const updatedEmployee = await api.setEmployeeSalary(
          employee.id,
          newSalary,
        );
        successfulUpdates++;
        summarySalaries += newSalary;

        const text = `Привет, ${employee.name}! Поздравляем, твоя новая зарплата = ${updatedEmployee.salary}!`;
        await api.notifyEmployee(updatedEmployee.id, text);
      } catch (error) {
        await api.notifyAdmin(error);
      }
    }

    await api.sendBudgetToAccounting(summarySalaries);

    return successfulUpdates;
  } catch (error) {
    await api.notifyAdmin(error);
  }
  // Пишите код здесь
}

const api = {
  _employees: [
    { id: 1, name: "Alex", salary: 120000 },
    { id: 2, name: "Fred", salary: 110000 },
    { id: 3, name: "Bob", salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      const updatedEmployees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
              ...employee,
              salary: newSalary,
            },
      );
      this._employees = updatedEmployees;
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve();
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },

  sendBudgetToAccounting(newBudget) {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

export { newIncreaseSalary, api };
// Для запуска теста вводим в терминале команду: npm run test:current -- newIncreaseSalary.test.js
