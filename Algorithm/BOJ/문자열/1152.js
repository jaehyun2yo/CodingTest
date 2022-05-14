const fs = require("fs");

// vscode 테스트
// const input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split(" ");

const input = fs.readFileSync('dev/stdin').toString().trim().split(" ");
// " " 공백이 추가될수있기때문에 이조건은 제거한다.
let count = 0;
for (let i = 0; i < input.length; i++){
    if (input[i] !== "") {
        count++;
    }

}

console.log(count);