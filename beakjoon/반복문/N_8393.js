/** n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오. */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

let a = parseInt(input);
let result = 0;
for (let i = 1; i < a + 1; i++) {
  result += i;
}
console.log(result);
