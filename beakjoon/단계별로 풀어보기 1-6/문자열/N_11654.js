// NOTE: 문자에 해당하는 아스키코드를 가져오는 메서드 charCodeAt()
let fs = require('fs')
let path = require('path')

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split('\n')

const a = input[0]


console.log(a.charCodeAt())
