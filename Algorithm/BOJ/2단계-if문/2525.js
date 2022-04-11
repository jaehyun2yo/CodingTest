// 오븐시계
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;
rl.on("line", function (line) {
  input.push(line);
}).on("close", function (line) {
  let hour = parseInt(input[0].split(" ")[0]);
  let min = parseInt(input[0].split(" ")[1]);
  let cookTime = parseInt(input[1]);

  if (min + cookTime >= 60) {
    hour += Math.floor((min + cookTime) / 60);
    min = (min + cookTime) % 60;
  } else {
    min = (min + cookTime) % 60;
  }
  hour %= 24;
  consolelog(hour, min);
});
