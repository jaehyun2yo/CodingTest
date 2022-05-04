const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const test = input[0];

for (let i = 1; i < test + 1; i++) {
  let num = input[i].split(" ").map(Number);

  console.log(num[0] + num[1]);
}
