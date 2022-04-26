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

// readline

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
let H = 0;
let M = 0;
let timer = 0;
rl.on("line", function (line) {
  cnt++;
  if (cnt === 2) {
    timer = parseInt(line);
    rl.close();
  }
  line = line.split(" ");
  H = parseInt(line[0]);
  M = parseInt(line[1]);
}).on("close", function () {
  console.log(solution(H, M, timer));
  process.exit();
});

function solution(h, m, time) {
  let answer = "";
  let Hadd = Math.floor((m + time) / 60);
  let Madd = (m + time) % 60;

  if (m + time >= 60) {
    h = h + Hadd;
    m = Madd;
    if (h > 23) {
      h %= 24;
    }
  } else if (m + time < 60) {
    m = m + time;
  }
  answer = h + " " + m;
  return answer;
}
