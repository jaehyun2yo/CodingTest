const input = require('fs').readFileSync('dev/stdin').toString().trim();
// const input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim();

let daior = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

let result = 0;
for (let i = 0; i < input.length; i++) {
  for (let num in daior) {
    if (daior[num].includes(input[i])) {
      result += Number(num) + 1;
    }
  }
}
console.log(result);
