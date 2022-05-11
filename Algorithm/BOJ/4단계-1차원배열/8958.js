const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);
let result = "";
for (let i = 1; i <= testCase; i++) {
    let score = 0;
    let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      score += 1;
    } else {
      score = 0;
    }
      sum += score;
  }
  result += sum + "\n";
}

console.log(result);
