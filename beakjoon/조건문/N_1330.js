/** 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오. */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

const compare = (a, b) => {
  let result = "";
  if (a > b) {
    result = ">";
  } else if (a < b) {
    result = "<";
  } else {
    result = "==";
  }
  return result;
};

console.log(compare(a, b));
