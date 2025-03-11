/** 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const a = parseInt(input);
let star = "";
for (let i = 1; i <= a; i++) {
  star += "*";
  console.log(star);
}
