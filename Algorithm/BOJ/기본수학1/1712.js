// a = 고정 비용 b = 한대 생산비용 c = 노트북 가격
// 손익분기점 =  c-b = 양수면 가능함 / 음수면 불가능

const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ");

// 고정비용 원가 판매가
const fixedCost = Number(input[0]);
const cost = Number(input[1]);
const price = Number(input[2]);

let result = 0;
// 하나생산해서 팔았을때 이득
let profit = price - cost;

// 이윤이 남는다면?
if (profit > 0) {
  result = fixedCost / profit + 1;
} else {
  result = -1;
}

console.log(result);
