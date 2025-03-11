let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const n = Number(input[0])
let result = []

for(let i = 1; i <= n; i++) {
    let [a, b] = input[i].split(' ')
    let str = ''
    str = b.split('').map(ev => ev.repeat(Number(a))).join('');
    result.push(str)
}

console.log(result.join('\n'))