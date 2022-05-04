const input = require("fs").readFileSync("dev/stdin").toString();
const num = parseInt(input);
let result = "";
for (let i = 1; i <= num; i++){
    result += i + "\n"
}

console.log(result);