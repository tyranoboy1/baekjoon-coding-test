let fs = require("fs");
let path = require("path");

let input = fs.readFileSync(path.join(__dirname, "../../input.txt")).toString().trim();

const lang = ['c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];

let count = 0;
let i = 0;

while (i < input.length) {
    if (input.substring(i, i+3) === "dz=") {
        i += 3;
    } else if (lang.includes(input.substring(i, i+2))) {
        i += 2;
    } else {
        i += 1;
    }
    count += 1;
}

console.log(count);

