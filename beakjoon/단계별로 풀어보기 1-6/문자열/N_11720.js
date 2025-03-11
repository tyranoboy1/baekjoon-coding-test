let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const str = input[1].split('')

console.log(str.reduce((acc, cur) => { return  Number(acc) + Number(cur)},0))
