let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString()

const str = input.split(' ')

const getResult = (p1, p2) => {
    if(p1 > p2) {
        console.log(p1)
    }
    else{
        console.log(p2)

    }
}
getResult(Number(str[0].split('').reverse().join('')), Number(str[1].split('').reverse().join('')))

