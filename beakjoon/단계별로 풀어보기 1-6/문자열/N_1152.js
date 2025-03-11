let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim()

const str = input.split(' ').filter((ev) => ev !== '')

console.log(str.length)


