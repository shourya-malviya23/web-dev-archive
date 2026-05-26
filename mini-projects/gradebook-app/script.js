function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  let len = scores.length;
  let avg = sum / len;
  return avg;
}

function getGrade(num) {
  if (num === 100) {
    return "A+";
  } else if (num >= 90 && num < 100) {
    return "A";
  } else if (num >= 80 && num < 90) {
    return "B";
  } else if (num >= 70 && num < 80) {
    return "C";
  } else if (num >= 60 && num < 70) {
    return "D";
  } else if (num >= 0 && num < 60) {
    return "F";
  }
}

function hasPassingGrade(grade) {
  if (grade === "F") {
    return false;
  }
  return true;
}

function studentMsg(totalScores, studentScore) {
  let avg = getAverage(totalScores);
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(grade);

  if (passed === true) {
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
}
