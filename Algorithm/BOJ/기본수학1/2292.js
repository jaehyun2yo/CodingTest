const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const num = Number(input);
let range = 1;
let block = 1;

// 1 = 1방
// 2~7 (6) = 2방
// 8 ~ 19 (12) = 3방
// 20 ~37 (18) = 4방

while (block < input) {
  block += 6 * range;
  range++;
}

console.log(range);
