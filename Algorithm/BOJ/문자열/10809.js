const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let str = input[0];
let str_arr = "abcdefghijklmnopqrstuvwxyz";
let result = "";

for (let i = 0; i < str_arr.length; i++){
    result += str.indexOf(str_arr[i]) + " "
}
console.log(result);