// Calculates if given year was/will be the leap year
const isLeapYear = (year) =>
  Number(year) % 4 === 0 &&
  (Number(year) % 100 !== 0 || Number(year) % 400 === 0);

console.log("2024 is leap year -> ", isLeapYear(2024));
console.log("2020 is leap year -> ", isLeapYear(2020));
console.log("2100 is leap year -> ", isLeapYear(2100));
console.log("1996 is leap year -> ", isLeapYear(1996));
console.log("1997 is leap year -> ", isLeapYear(1997));
console.log("2016 is leap year -> ", isLeapYear(2016));
console.log("2012 is leap year -> ", isLeapYear(2012));
console.log("2008 is leap year -> ", isLeapYear(2008));
