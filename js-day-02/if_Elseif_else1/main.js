var checkGrade = 100;
// if (checkGrade >= 90) {
//     console.log("A")
// } else if (checkGrade >= 80) {
//     console.log("B")
// } else if (checkGrade >= 70) {
//     console.log("C")
// } else if (checkGrade >= 60) {
//     console.log("D")
// } else {
//     console.log("F")
// }

var check = checkGrade >= 90 ? "A"
    : checkGrade >= 80 ? "B"
        : checkGrade >= 70 ? "C"
            : checkGrade >= 60 ? "D"
                : "f"
console.log(check)

