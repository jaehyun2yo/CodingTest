// 두 수 비교하기
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}

// 시험 성정
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const score = parseInt(input[0]);

if (score > 89 && score < 101) {
  console.log("A");
} else if (score > 79 && score < 90) {
  console.log("B");
} else if (score > 69 && score < 80) {
  console.log("C");
} else if (score > 59 && score < 70) {
  console.log("D");
} else {
  console.log("F");
}

//윤년

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const year = parseInt(input[0]);

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("1");
} else {
  console.log("0");
}

//사분면 고르기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }

  process.exit();
});

// 알람 시계

let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

let hour = Number(input[0]); // Hour
let minute = Number(input[1]); // Minute

minute -= 45;

if (minute < 0) {
  minute += 60;
  hour--;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(hour + " " + minute);

// 오븐시계 

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;
rl.on("line", function (line) {
    input.push(parseInt())
    if (count = 1) {
        rl.on("close");
    }
});
rl.close()