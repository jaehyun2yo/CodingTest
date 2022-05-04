const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const test = input[0];
let result = "";
for (let i = 1; i <= test; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result += a + b + "\n";
}
console.log(result);
