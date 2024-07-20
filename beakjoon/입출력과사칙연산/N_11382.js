/** 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다! */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a + b + c);
