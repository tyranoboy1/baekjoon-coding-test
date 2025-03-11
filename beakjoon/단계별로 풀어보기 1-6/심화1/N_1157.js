let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim();

const str = input.split("").map((ev) => ev.toLowerCase());

const count = {}

str.forEach((ev) => {
    if(count[ev]) {
        count[ev] += 1
    }
    else {
        count[ev] = 1
    }
})

let maxValue  = 0
let maxChar = []

Object.entries(count).map(([key, value]) => {
    if(value > maxValue) {
        maxValue = value
        maxChar = [key]
    } else if(value === maxValue) {
        maxChar.push(key)
    }
})

console.log(maxChar.length >= 2 ? '?' :  maxChar[0].toUpperCase())

