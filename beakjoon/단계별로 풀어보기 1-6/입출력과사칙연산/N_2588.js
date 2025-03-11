/** (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다. */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let firstNum = input[0];
let secondNum = input[1];

console.log(Number(firstNum) * Number(secondNum[secondNum.length - 1]));
console.log(Number(firstNum) * Number(secondNum[secondNum.length - 2]));
console.log(Number(firstNum) * Number(secondNum[secondNum.length - 3]));
console.log(Number(firstNum) * Number(secondNum));
