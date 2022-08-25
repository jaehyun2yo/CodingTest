const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = 0;
const total = parseInt(input[0]);
const list = parseInt(input[1]);

for (let i = 2; i <= list + 1; i++) {
  let newArr = input[i].split(" ").map((item) => parseInt(item));
  result += newArr[0] * newArr[1];
}

console.log(total === result ? "Yes" : "No");


