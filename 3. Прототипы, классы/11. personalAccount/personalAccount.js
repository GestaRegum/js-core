class Person {
  constructor(firstName, secondName, birthDay) {
      this.firstName = firstName;
      this.secondName = secondName;
      this.birthDay = birthDay;
  }

  getAge() {
      let toDay = new Date("2023-05-23");
      let birthData = new Date(this.birthDay);
      let year = toDay.getFullYear() - birthData.getFullYear();
      return year;
  }

  get fullName() {
      return `${this.firstName} ${this.secondName}`;
  }

  // Пишите код здесь
}

class Account {
  constructor(person, sum) {
      this.person = person;
      this.balans = sum;
      this.history = [];
  }

  static transfer(fromAccount, toAccount, amount) {
      fromAccount.withdrawMoney(amount, toAccount);
      toAccount.addMoney(amount, fromAccount);
  }

  addMoney(amount, description) {
      this.balans += +amount;
      this.history.push({
          timestamp: Date.now(),
          target: "in",
          amount: amount,
          description: description,
      });
  }

  withdrawMoney(amount, description) {
      this.balans -= amount;
      this.history.push({
          timestamp: Date.now(),
          target: "out",
          amount: amount,
          description: description,
      });
  }

  getAmount() {
      return this.balans;
  }

  getAccountHistory() {
      return this.history;
  }

  // Пишите код здесь
}

export { Person, Account };
// npm run test:current -- personalAccount.test.js
