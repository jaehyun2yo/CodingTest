// 1. 같은 눈이 3개나오면 10000  +눈 * 1000
// 2. 같은 눈이 2개나오면 1000 + 눈 * 100
// 3. 모두 다른눈이면 가장큰눈 * 100

const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(c * 100);
}
