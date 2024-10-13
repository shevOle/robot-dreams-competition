// 1-liner that tries to deliver a random number from 1 to 100
const getRandomNumberFrom1to100 = () =>
  [Date.now().toString()].map((v) => Number(v.slice(v.length - 2)))[0];

console.log(getRandomNumberFrom1to100());
