/** 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.  */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const num = parseInt(input[0]);

let result = [];

for (let i = 1; i <= num; i++) {
  const testCase = input[i].split(" ");
  result.push(
    `Case #${i}: ${testCase[0]} + ${testCase[1]} = ${
      parseInt(testCase[0]) + parseInt(testCase[1])
    }`
  );
}

console.log(result.join("\n"));
