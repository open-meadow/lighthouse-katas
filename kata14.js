const calculateChange = function (total, cash) {
  // Your code here
  const coinOwed = {};
  let moneyOwed = (cash - total);
  while (moneyOwed > 0) {
    if (moneyOwed >= 2000) {
      coinOwed.twentyDollars = coinOwed.twentyDollars + 1 || 1;
      moneyOwed -= 2000;
    } else if (moneyOwed >= 1000) {
      coinOwed.tenDollars = coinOwed.tenDollars + 1 || 1; 
      moneyOwed -= 1000;
    } else if (moneyOwed >= 500) {
      coinOwed.fiveDollars = coinOwed.fiveDollars + 1 || 1;
      moneyOwed -= 500;
    } else if (moneyOwed >= 200) {
      coinOwed.twoDollars = coinOwed.twoDollars + 1 || 1;
      moneyOwed -= 200;
    } else if (moneyOwed >= 100) {
      coinOwed.oneDollar = coinOwed.oneDollar + 1 || 1;
      moneyOwed -= 100;
    } else if (moneyOwed >= 25) {
      coinOwed.quarter = coinOwed.quarter + 1 || 1;
      moneyOwed -= 25;
    } else if (moneyOwed >= 10) {
      coinOwed.dime = coinOwed.dime + 1 || 1;
      moneyOwed -= 10;
    } else if (moneyOwed >= 5) {
      coinOwed.nickel = coinOwed.nickel + 1 || 1;
      moneyOwed -= 5;
    } else {
      coinOwed.penny = coinOwed.penny + 1 || 1; 
      moneyOwed -= 1; 
    }
  }
  return coinOwed;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
