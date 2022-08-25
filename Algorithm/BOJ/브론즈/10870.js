const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const n = input;

// for (let i = 0; i <= count + 1; i++){
//     let A = i;
//     let B = i + 1;
//     let temp = 0;
// }

function fibonacci(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(n));
