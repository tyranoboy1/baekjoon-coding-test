let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const n = Number(input[0])

let result = []

for(let i = 1; i <=n; i++) {
    result.push(input[i].split(' ').map((ev) => ev.split('').reverse().join('')).join(' '))
}


console.log(result.join('\n'))

