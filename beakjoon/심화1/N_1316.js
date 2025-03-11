let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split("\n");

const n = Number(input[0])

let count = 0

for (let i = 1; i <= n; i++) {
    const str = input[i].split('')
    const word = new Set()
    let prevWord = ''
    let isGroupWord = true
    for(let j = 0; j < str.length; j++) {
        if(word.has(str[j]) && str[j] !== prevWord) {
            isGroupWord = false
            break
        }
        word.add(str[j])
        prevWord = str[j]
        isGroupWord = true
    }
    if(isGroupWord) {
        count++
    }
}

console.log(count)












