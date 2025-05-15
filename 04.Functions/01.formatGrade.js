// function PrintGrade(grade) {
//   if (grade >= 2 && grade < 3) {
//     console.log(`Fail (${grade.toFixed(2)})`);
//   } else if (grade >= 3.0 && grade < 3.5) {
//     console.log(`Poor (${grade.toFixed(2)})`);
//   } else if (grade >= 3.5 && grade < 4.5) {
//     console.log(`Good (${grade.toFixed(2)})`);
//   } else if (grade >= 4.5 && grade < 5.5) {
//     console.log(`Very good (${grade.toFixed(2)})`);
//   } else if (grade >= 5.5 && grade <= 6.0) {
//     console.log(`Excellent (${grade.toFixed(2)})`);
//   }
// }

// PrintGrade(3.33);
// PrintGrade(4.5);
// PrintGrade(2.99);
// PrintGrade(6.99);
// PrintGrade(2.00);
// PrintGrade(3.00);
// PrintGrade(1.50);

function formatGrade(inputGrade) {
  let grade = "";

  if (inputGrade < 3.0) {
    grade = `Fail`;
  } else if (inputGrade < 3.5) {
    grade = `Poor`;
  } else if (inputGrade < 4.5) {
    grade = `Good`;
  } else if (inputGrade < 5.5) {
    grade = `Very good`;
  } else {
    grade = `Excellent`;
  }
  console.log(`${grade} (${inputGrade.toFixed(2)})`);
  // if (inputGrade < 3.00) {
  //   console.log(grade + ` (2)`);
  //   } else {
  //      console.log(`${grade} (${inputGrade.toFixed(2)})`);
  //     }
}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)