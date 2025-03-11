let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number)

const bucket = Array.from({length: N} , (_,i) =>  {return i+1})



for(i=0; i<M; i++) {
    const [a, b] = input[i + 1].split(' ').map(Number)

    const reversed = bucket.splice(a - 1, b - (a - 1)).reverse();

    bucket.splice(a - 1, 0, ...reversed);
}
console.log(bucket.join(' '))










