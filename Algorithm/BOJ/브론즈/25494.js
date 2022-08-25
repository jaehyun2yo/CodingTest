const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const testCase = parseInt(input[0]);
let result = "";

for (let i = 1; i <= testCase; i++) {
  let [a, b, c] = input[i]
    .split(" ")
    .map((num) => parseInt(num))
    .sort((a, b) => a - b);
  result += a + "\n";
}

console.log(result);
