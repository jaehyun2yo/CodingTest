const input = require("fs").readFileSync("/dev/stdin").toString();

let result = 0;
for (let i = 1; i <= parseInt(input); i++) {
  result += i;
}

console.log(result);
