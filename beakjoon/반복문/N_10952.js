/** 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let testCase = input[i].split(" ");
  if (parseInt(testCase[0]) + parseInt(testCase[1]) !== 0) {
    console.log(parseInt(testCase[0]) + parseInt(testCase[1]));
  }
}
