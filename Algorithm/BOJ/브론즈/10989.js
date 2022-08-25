const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
const [count, ...num] = input;
num.sort((a, b) => a - b);
num.forEach((number) => (result += number + "\n"));
console.log(result);
console.log(typeof num[0]);
