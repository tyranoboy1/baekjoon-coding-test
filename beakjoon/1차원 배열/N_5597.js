let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().split('\n')

const a = [...new Array(30)].map((_, i) => i + 1);
const b = input.map(Number)

const result = a.filter((ev) => !b.includes(ev))

const max = Math.max(...result)
const min = Math.min(...result)

console.log(min)
console.log(max)