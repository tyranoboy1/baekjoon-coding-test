/** 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오. */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

let a = input[0];
let b = input[1];

console.log(a - b);
