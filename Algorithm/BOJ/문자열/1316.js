const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");

const N = Number(input[0]);
let result = 0;

for (let i = 1; i <= N; i++) {
  let word = input[i];
  let findword = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (findword.indexOf(word[j]) === -1) {
      findword.push(word[j]);
    } else {
      if (findword.indexOf(word[j]) !== findword.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }
  if (isGroupWord) {
    result += 1;
  }
}

console.log(result);

// 그룹단어 연속된단어이거나 , 단어가 하나이거나
//
