// 오븐시계

var fs = require("fs");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const time = input[0].split(" ");

let h = parseInt(time[0]);
let m = parseInt(time[1]);
let cookTime = parseInt(input[1]);

if (m + cookTime >= 60) {
  h += m + cookTime / 60;
  m = (m + cookTime) % 60;
  if (h > 23) {
    h = h % 24;
  }
} else {
  m += cookTime;
}
console.log(`${h} ${m}`);
