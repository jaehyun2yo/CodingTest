const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let counter = 0;

let numberArr = input[1].split(" ");
numberArr.forEach((num) => {
  for (let i = 2; i < num - 1; i++) {
    if (num % i == 0) {
      return false;
    }
    return count++;
  }
});
