/** 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const score = parseInt(input);

const renderScore = (pScore) => {
  if (pScore >= 90 && pScore <= 100) {
    return "A";
  } else if (pScore >= 80 && pScore <= 89) {
    return "B";
  } else if (pScore >= 70 && pScore <= 79) {
    return "C";
  } else if (pScore >= 60 && pScore <= 69) {
    return "D";
  } else {
    return "F";
  }
};

console.log(renderScore(score));
