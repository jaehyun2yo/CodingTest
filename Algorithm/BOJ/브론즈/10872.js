const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let result = 1;
for (let i = 1; i <= input; i++) {
  result *= i;
}
console.log(result);
