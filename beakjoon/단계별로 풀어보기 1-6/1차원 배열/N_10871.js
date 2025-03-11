/** 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오. */
let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().split('\n');

const a = input[0].split(" ");
const b = input[1].split(" ");

const result  = b.filter((ev) => parseInt(ev) < parseInt(a[1]))

console.log(result.join(" "));
