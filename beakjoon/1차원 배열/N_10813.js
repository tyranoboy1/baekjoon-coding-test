let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number)

const bucket = Array.from({length:N}, (_, i) => {return i+1})

for(let i = 0; i < M; i++){
    let [start, end] = input[i+1].split(" ").map(Number)
    let a = 0

    a = bucket[start-1]
    bucket[start-1] = bucket[end-1]
    bucket[end-1] = a
}

console.log(bucket.join(" "))