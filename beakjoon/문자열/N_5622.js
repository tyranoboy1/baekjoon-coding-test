let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim()

let result = []

const str = input.split('')

const dial = Array.from({length:10}, (_, i) => { return i+1})

const getDialNumber = (p) => {
    if(['A', 'B','C'].includes(p)) {
        return 2
    }
    if(['D', 'E','F'].includes(p)) {
        return 3
    }
    if(['G', 'H','I'].includes(p)) {
        return 4
    }
    if(['J', 'K','L'].includes(p)) {
        return 5
    }
    if(['M', 'N','O'].includes(p)) {
        return 6
    }
    if(['P', 'Q','R','S'].includes(p)) {
        return 7
    }
    if(['T', 'U','V'].includes(p)) {
        return 8
    }
    if(['W', 'X','Y','Z'].includes(p)) {
        return 9
    }
}

str.forEach((ev) => {
    result.push(dial.findIndex((i) => i === getDialNumber(ev))+2)
})

console.log(result.reduce((acc, cur) => {return acc + cur}, 0))