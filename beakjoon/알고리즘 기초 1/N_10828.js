let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

let result = []

for(let i = 1; i <= Number(input[0]); i++) {
    const [order, value = 0] = input[i].split(' ')
    if(order === 'push') {
        result.push(Number(value))
    }
    if(order === 'top') {
        console.log(result.length > 0 ? result[result.length - 1] : -1)
    }
    if(order === 'size') {
        console.log(result.length)
    }
    if(order === 'empty'){
        console.log(result.length === 0 ? 1: 0)
    }
    if(order === 'pop') {
        if(result.length === 0) {
            console.log(-1)
        }
        else {
            console.log(result[result.length - 1])
            result.pop()
        }
    }
}
