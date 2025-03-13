let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const count = Number(input.shift())

let stack =[]
let result=''
let n = 1

for(let i=0; i<count; i++){
    const m = Number(input[i])

    while(n<=m){
        stack.push(n);
        result +='+ ';
        n += 1;
    }

    let num = stack.pop();
    if(num !== m){
        result = "NO";
        break;
    }
    result +='- '
}
console.log(result.split(' ').join('\n'))




