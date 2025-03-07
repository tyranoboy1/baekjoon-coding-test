let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim()

const str = input.split('')

let result = []
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q', 'r','s','t','u', 'v','w','x','y','z']

alphabet.forEach((i) => {
    const res= str.findIndex((j) => i === j)
    result.push(res)
})

console.log(result.join(' '))