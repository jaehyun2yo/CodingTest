const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let word = input.toLowerCase();
// 알파벳 개수를 저장할 배열을 0 으로 채움
const result = new Array(26).fill(0);

for (let i = 0; i < word.length; i++) {
  //word를 순서대로 돌면서 맞는 알파벳 자리에 result 안에 맞는 알파벳에 +1 씩 더해준다.
  result[word.charCodeAt(i) - 97]++;
}

// result 에서 가장 큰 수 = 빈도수가 높은 문자 수
const maxCount = Math.max(...result);
const maxIndex = result.indexOf(maxCount);

// 빈도수가 가장 높은 수의 첫번째와 마지막 인덱스가 같다면 유일한 문자이고
// 아니라면 다른 문자이므로 ?

if (maxIndex === result.lastIndexOf(maxCount)) {
  // 65 부터 "A"이다.
  console.log(String.fromCharCode(maxIndex + 65));
} else {
  console.log("?");
}
