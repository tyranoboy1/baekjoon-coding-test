let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const text = input[0]
const index = Number(input[1])

console.log(text[index-1])