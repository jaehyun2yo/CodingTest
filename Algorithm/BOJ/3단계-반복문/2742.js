const input = require("fs").readFileSync("dev/stdin").toString();

const num = parseInt(input);
let result = "";
for (let i = num; i > 0; i--){
    result += i + "\n";
}

console.log(result);