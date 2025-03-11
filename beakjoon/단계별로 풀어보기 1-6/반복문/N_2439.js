/** 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오. */

// NOTE 별짓기 문제 여러 유형 풀이

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();
const a = parseInt(input);
let star = "";
let blank = "";

for (let i = 1; i <= a; i++) {
  star += "*";
  for (let j = 1; j <= a - i; j++) {
    blank += " ";
  }
  console.log(blank + star);
  blank = "";
}
