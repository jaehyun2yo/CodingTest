const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const testcase = parseInt(input[0]);
let result = "";

for (let i = 1; i <= testcase; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result += `Case #${i}: ${a} + ${b} = ${a + b}` + "\n";
}

console.log(result);
