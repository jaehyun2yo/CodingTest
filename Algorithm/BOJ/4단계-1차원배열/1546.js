const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const score = input[1].split(" ").map(Number).sort((a, b) => a - b);
let MaxScore = score[N - 1];
let result = 0;


let NewScore = score.map(x => x / MaxScore * 100);
result = NewScore.reduce((sum, el) => sum + el, 0) / N;

console.log(result);

