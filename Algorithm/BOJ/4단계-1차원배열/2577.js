const input = require("fs").readFileSync('dev/stdin').toString().split("\n").map(Number);

const num = String(input[0] * input[1] * input[2]);
let result = "";

for (let i = 0; i < 10; i++){
    result += num.split(i + "").length - 1 +"\n";
    // let pattern = String(i);
    // let matchpattern = new RegExp(pattern, "g");

    // result += num.match(matchpattern)?.length + "\n";
}

console.log(result);