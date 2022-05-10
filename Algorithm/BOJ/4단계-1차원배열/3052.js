const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((x) => x % 42);

const result = [...new Set(input)];

console.log(result.length);
