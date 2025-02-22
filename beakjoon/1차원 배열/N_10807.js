/** 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오. */
let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().split('\n');


const b = input[1].split(' ')
const c = input[2]

let result = 0

const t = () => b.map((ev) => {
    if(ev === c) {
        result += 1
    }
})

t()

console.log(result)