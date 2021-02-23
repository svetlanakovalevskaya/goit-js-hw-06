import users from "./users.js";

const calculateTotalBalance = users => users.map(user => user.balance)
.reduce((total, balance) => total + balance, 0);
  
console.log(calculateTotalBalance(users)); // 20916