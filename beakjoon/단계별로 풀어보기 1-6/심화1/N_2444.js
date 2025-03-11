let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim()

const n = Number(input)

for(let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(i*2+1))
}

for(let i = n - 2; i >= 0; i--) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(i*2+1))
}