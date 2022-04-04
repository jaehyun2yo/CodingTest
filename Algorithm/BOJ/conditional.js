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

//
