const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const testCase = Number(input[0]);
let result = "";

for (let i = 1; i <= testCase; i++){
    let arr = input[i].split(" ");
    let R = Number(arr[0]);
    let S = arr[1];

    for (let j = 0; j < S.length; j++){
        result += S[j].repeat(R);
    }
    result += "\n";
}

console.log(result);