const input = require("fs").readFileSync("dev/stdin").toString();

const num = parseInt(input);
let result = "";
const star = "*";
const space = " ";
for (let i = 1; i <= input; i++) {
  result += space.repeat(input - i) + star.repeat(i) + "\n";
}
console.log(result);
