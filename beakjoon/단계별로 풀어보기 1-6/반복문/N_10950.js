/** 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let num = parseInt(input[0]);

for (let i = 1; i < num + 1; i++) {
  const sum = input[i].split(" ");
  console.log(`${parseInt(sum[0]) + parseInt(sum[1])}`);
}
