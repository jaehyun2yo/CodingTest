const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let result = "";
while (true) {
  let i = 0;

  const [a, b] = input[i];
  if (a == 0 && b == 0) {
    break;
  }
  result += a + b + "\n";
}

console.log(result);

//메모리 초과됨

const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
let result = "";
for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map((x) => parseInt(x));

  result += a + b + "\n";
}
console.log(result);

// 풀이 성공 
