const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let num = input[1].split('').map(Number);
let result = num.reduce((s, v) => s + v);
console.log(result);

