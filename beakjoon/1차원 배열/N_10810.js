let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number)

const bucket = new Array(N).fill(0)

for(let i = 0; i < M; i++){
    let [start, end, ball] = input[i+1].split(' ').map(Number)
    for(let j = start; j <= end; j++) {
        bucket[j-1] = ball
    }
}

console.log(bucket.join(" "))

































// const [N, M] = input[0].split(" ").map(Number);
// const bucket = new Array(N).fill(0)
//
// for(let i = 1; i<= M; i++){
//     let [start, end, b] = input[i].split(" ").map(Number)
//     for(let j = start; j<= end ; j++){
//         bucket[j-1] = b
//     }
// }
// console.log(bucket.join(" "))
