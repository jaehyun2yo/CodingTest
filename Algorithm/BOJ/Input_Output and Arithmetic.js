// We love krill
console.log("강한친구 대한육군");
console.log("강한친구 대한육군");

//고양이
console.log(`\\    /\\`);
console.log(` )  ( ')`);
console.log(`(  /  )`);
console.log(` \\(__)|`);

//개
console.log(`|\\_/|`);
console.log(`|q p|   /}`);
console.log(`( 0 )"""\\`);
console.log('|"^"`    |');
console.log(`||_/=\\\\__|`);

// A+B

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
console.log(input[0] + input[1]);

//A + B
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);

//A-B
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A - B);

//A * B
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A * B);

//A / B
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A / B);

//사칙연산

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);

//??!

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const result = `${input}??!`;
console.log(result);

//1998년생인 내가 태국에서는 2541년생?!

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const result = input - 543;
console.log(result);

//나머지

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);

// 곱셈

const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [B0, B1, B2] = B.split("");
const temp1 = A * B2;
const temp2 = A * B1;
const temp3 = A * B0;
const result = A * B;
console.log(`${temp1}\n${temp2}\n${temp3}\n${result}`);
