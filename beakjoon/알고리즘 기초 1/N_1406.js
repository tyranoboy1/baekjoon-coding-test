let fs = require('fs')
let path = require('path')
const input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const str = input[0].split('')
const n = Number(input[1])

const leftStack = [...str]
const rightStack = []

for(let i = 1; i <= n; i++) {
    let command = input[i+1]

    if(command === 'L' && leftStack.length > 0) {
        rightStack.push(leftStack[leftStack.length - 1])
        leftStack.pop()
    }
    if(command === 'D' && rightStack.length > 0) {
        leftStack.push(rightStack[rightStack.length - 1])
        rightStack.pop()
    }
    if(command === 'B' && leftStack.length > 0) {
        leftStack.pop()
    }
    if(command.split(' ')[0] === 'P') {
        const addStr = command.split(' ')[1]
        leftStack.push(addStr)
    }
}
console.log(leftStack.concat(rightStack.reverse()).join(''))

