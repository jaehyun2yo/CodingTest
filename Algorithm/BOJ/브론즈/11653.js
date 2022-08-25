const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let num = parseInt(input);
let i = 2;
const result = [];
while (true) {
  if (num * i === 0) {
    num = num / i;
    result.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}

console.log(result.join("/n"));
