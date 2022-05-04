const input = require("fs").readFileSync("dev/stdin").toString();

const num = parseInt(input);
let result = "";
const star = "*"
for (let i = 1; i <= input; i++){
    result += star.repeat(i) + "\n";
}
console.log(result);
