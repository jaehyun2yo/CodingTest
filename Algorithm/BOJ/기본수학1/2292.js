const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const num = Number(input);
let range = 1;
let block = 1;

// 1 = 1방
// 2~7 (6) = 2방
// 8 ~ 19 (12) = 3방
// 20 ~37 (18) = 4방
// 방이 하나 늘때마다 6의 배수 로 늘어난다 
// 이를 이용해서 while 문으로 6의 배수만큼 늘려간다.
// 임의 숫자가 input 과 커지면 멈추고 늘려간방을 출력한다.

while (block < input) {
  block += 6 * range;
  range++;
}

console.log(range);
