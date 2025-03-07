let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')


const a = Number(input[0])

const result = [];

for (let i = 1; i <= a; i++) {
    const str = input[i];
    const first = str[0];
    const last = str.at(-1);

    result.push(first + last);
}

console.log(result.join('\n'));

