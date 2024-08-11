/** 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.*/

// NOTE 파일에서 불러오는 input에 개행문자가 포함되어 있을 수 있으므로 trim() 함수를 통해 공백과 개행 문자 제거
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  let testCase = input[i].split(" ");
  console.log(parseInt(testCase[0]) + parseInt(testCase[1]));
}
