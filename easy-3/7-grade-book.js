function getGrade(grade1,grade2,grade3){
  let meanGrades = (grade1+grade2+grade3)/3
  if(meanGrades <=100 && meanGrades>=90){
    return `A`;
  } else if(meanGrades < 90 && meanGrades >=80){
    return `B`;
  } else if(meanGrades<80 && meanGrades >= 70){
    return `C`;
  } else if(meanGrades<70 && meanGrades >=60){
    return `D`;
  } else {
    return `F`;
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"