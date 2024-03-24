let grade = prompt("Enter your marks:");
// let remarks = 'You have attained a grade '
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
if (grade > 79) {
    grade = 'A';
    // console.log(remarks+grade)
    console.log(`You have attained a grade ` + grade);
}
else if (grade >= 60 && grade <= 79) {
    grade = 'B';
    console.log(`You have attained a grade ` + grade);
}
else if (grade >= 50 && grade <= 59) {
    grade = 'C';
    console.log(`You have attained a grade ` + grade);
}
else if (grade >= 40 && grade <= 49) {
    grade = 'D';
    console.log(`You have attained a grade ` + grade);
}
else {
    grade = 'E';
    console.log(grade);
}


