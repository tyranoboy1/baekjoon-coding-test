let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim().split("\n");

const subjectAverage = {
    'A+' : 4.5,
    'A0' : 4.0,
    'B+' : 3.5,
    'B0' : 3.0,
    'C+' : 2.5,
    'C0' : 2.0,
    'D+' : 1.5,
    'D0' : 1.0,
    'F': 0.0
}

let specificSubjectSum = 0
let scoreSum = 0


for(let i = 0; i < input.length; ++i) {
    const [_, score, rank] = input[i].split(' ')

    if( rank !== 'P') {
        specificSubjectSum += Number(score) * subjectAverage[rank]
        scoreSum += Number(score)
    }
}

console.log(specificSubjectSum / scoreSum)

