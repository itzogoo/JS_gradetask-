// You have been hired as a junior Javascript developer with GomyCode high School. The School is faced with
// grading their student. They want you to build a solution. 
// Build a Javascript program that grades student based on the following conditions. (1) Students with a score
// 90 to 100 should be graded A. (2) Students with a score 75 to 89 should be graded B, (3) Students with a 
// score 60 to 74 (4) Students with a score 50 to 59 should be graded D. should be graded C,



function calculateGrade() {
    let studentScore = prompt("Student, please enter your score")
    if (studentScore >= 90 && studentScore <= 100) {
    console.log("A = Excellent")
    } else if (studentScore >= 75 && studentScore <= 89) {
    console.log("B = Very Good")
    } else if (studentScore >= 60 && studentScore <= 74) {
    console.log("C = Credit")
    } else if (studentScore >= 50 && studentScore <= 59) {
    console.log("D = Pass")
    } else if (studentScore >= 0 && studentScore <= 49) {
    console.log("F = Fail woefully")
    } else {
    console.log("null")
    }
}

calculateGrade()
calculateGrade()
calculateGrade()
calculateGrade()
calculateGrade()

