const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map((num) => parseInt(num));
const scoreArr = input[1]
  .split(" ")
  .map((num) => parseInt(num))
  .sort((a, b) => b - a);

console.log(scoreArr[K - 1]);
