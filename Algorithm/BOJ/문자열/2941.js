const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
// const input = require('fs').readFileSync("dev/stdin").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;
let str = input;
for (let word of croatia) {
  str = str.split(word).join("Q");
  console.log(word, str);
}

console.log(str.length);


// split 는 () 안에 값을 기준으로 배열로 나누고 
// join 은 () 안에 값을 기준으로 문자열로 합친다.
