let fs = require('fs')
let path = require('path')
let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const n = Number(input.shift())
input = input.map((ev) => Number(ev))
let count = 1
const result = []
const stack = []

for(let i= 0; i < n; i++) {
    const m = input[i]
    while(count <= m) {
        stack.push(count)
        count += 1
        result.push('+')
    }
    if(stack[stack.length -1] === m) {
        stack.pop()
        result.push('-')
    }
    else {
        console.log('NO')
        return
    }
}
console.log(result.join('\n'))







