let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const a = input.map(Number)
const b = a.map((ev) => {
    return ev % 42
})

const result = new Set(b)

console.log([...result].length)

