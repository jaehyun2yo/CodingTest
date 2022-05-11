let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = input[0] * 1;
let result = "";

for (let i = 1; i <= num; i++) {
  // 점수
  let score = input[i].split(" ");
  // 점수케이스
  let num2 = score.shift() * 1;
  // 평균을 넘는 사람들 체크
  let count = 0;

  // 전체 합산 점수
  let avg = score.reduce((acc, v) => (acc += v * 1), 0);

  // 평균점수
  avg /= num2;

  // 평균점수보다 높은 사람들 구하기
  for (let j = 0; j < num2; j++) {
    if (score[j] > avg) {
      count++;
    }
  }
  // 소수점 3자리 에서 반올림

  result += ((count / num2) * 100).toFixed(3) + "%\n";
}

console.log(result);
