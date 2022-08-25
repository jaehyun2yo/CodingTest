const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let result = "";

for (let i = 0; i < input[0].length; i++) {
  let temp = input[0][i];
  let torf = true;

  for (let j = 0; j < input.length; j++) {
    if (temp !== input[j][i]) {
      torf = false;
      break;
    }
  }

  if (torf) {
    result += temp;
    // console.log("입력중 " + result);
  } else result += "?";
}

console.log(result);
