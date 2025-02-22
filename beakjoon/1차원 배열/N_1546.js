let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const score = input[1].split(' ').map(Number)

let sum = 0

score.forEach((ev) => {
    sum += ev / Math.max(...score) * 100
})

console.log(sum / score.length)