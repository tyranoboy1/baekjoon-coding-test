let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split(' ');

const a = [1, 1, 2, 2, 2, 8]
const b= input

let result = []

b.forEach((ev,i) => {
    if(Number(ev) > a[i]) {
        result.push(a[i] - Number(ev))
    }
    else if(Number(ev) < a[i]) {
        result.push(a[i] - Number(ev))
    }
    else {
        result.push(0)
    }
})

console.log(result.join(' '))