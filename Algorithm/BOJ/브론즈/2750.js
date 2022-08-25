const { parse } = require("path");

const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [count, ...numArr] = input;

const result = numArr.map((num) => parseInt(num)).sort((a, b) => a - b);

result.map((num) => console.log(num));
