let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const n = input[0]

const result = []

for(let i = 1; i<=n; i++) {
    const str = input[i].split('')
    const stack = []
    let isValid = true
    for(let j = 0; j < str.length; j++) {
        if(str[j] === '(') {
            stack.push('(')
        }
        if(str[j] === ')') {
            if(stack.length === 0) {
                isValid = false
                break;
            }
            else {
                stack.pop()
            }
        }
    }
    result.push(isValid && stack.length === 0 ? 'YES' : 'NO' )
}


console.log(result.join('\n'))



