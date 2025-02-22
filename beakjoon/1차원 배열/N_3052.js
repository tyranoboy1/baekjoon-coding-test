let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().split('\n')

const a = input.map(Number)


const t = a.map((ev) => {
    if(ev % 42 === 0) {
        return ev
    }
})



console.log(t)

