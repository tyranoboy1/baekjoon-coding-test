/** N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오. */
let fs = require('fs')
let path = require('path')

let input = fs.readFileSync((path.join(__dirname, "../../input.txt"))).toString().split('\n');


const b = input[1].split(" ");
const c = b.map((ev) => parseInt((ev)))


const max = Math.max(...c)
const min = Math.min(...c)

console.log(`${min} ${max}`)




