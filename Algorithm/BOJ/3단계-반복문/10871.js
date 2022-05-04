const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let result = "";

for (let i = 0; i < N; i++) {
  if (arr[i] < X) {
    result += arr[i] + " ";
  }
}

console.log(result);

/// for문으로만 풀려하지말고 내부함수로 푸니 내꺼보다 4초이상 빠름

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line1 = input[0].split(" ").map((x) => parseInt(x)); // 수열의 길이, 조건
const line2 = input[1].split(" ").map((x) => parseInt(x)); // 수열(배열)

const arr = line2.filter((num) => num < line1[1]); // 조건 수보다 작은 배열
console.log(arr.join(" "));
