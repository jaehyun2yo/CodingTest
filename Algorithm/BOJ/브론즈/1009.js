const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [counte, ...testCase] = input;
let result = testCase.map((num) => {
  const [a, b] = num.split(" ");
  let pow = 1;

  for (let i = 0; i < b; i++) {
    pow = (pow * a) % 10;
  }

  console.log(pow === 0 ? 10 : pow);
});
