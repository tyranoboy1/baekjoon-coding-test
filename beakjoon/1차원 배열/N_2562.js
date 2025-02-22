/** 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오. */

let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().split('\n')

console.log(input)

const a = input.map(Number);

const max = Math.max(...a)
const index = a.findIndex((ev) => ev === max)

console.log(max)
console.log(index + 1)


