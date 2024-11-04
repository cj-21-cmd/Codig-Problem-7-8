let DSA = [];
let PL = [];
let Networks = [];

let subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks");
let operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

while (operationChoice !== "D") {
  if (operationChoice === "A") {
    let studentName = prompt("Enter the name of the student to enroll:");
    if (subjectChoice === "A") {
      DSA.push(studentName);
    } else if (subjectChoice === "B") {
      PL.push(studentName);
    } else if (subjectChoice === "C") {
      Networks.push(studentName);
    }
  } else if (operationChoice === "B") {
    if (subjectChoice === "A") {
      console.log("Currently enrolled students in DSA:", DSA);
      let studentName = prompt("Enter the name of the student to unenroll:");
      DSA.pop(studentName);
    } else if (subjectChoice === "B") {
      console.log("Currently enrolled students in PL:", PL);
      let studentName = prompt("Enter the name of the student to unenroll:");
      PL.pop(studentName);
    } else if (subjectChoice === "C") {
      console.log("Currently enrolled students in Networks:", Networks);
      let studentName = prompt("Enter the name of the student to unenroll:");
      Networks.pop(studentName);
    }
  } else if (operationChoice === "C") {
    subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks");
  }
  operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");
}

console.log("Enrolled students in DSA:", DSA);
console.log("Enrolled students in PL:", PL);
console.log("Enrolled students in Networks:", Networks);
alert("Program exited.");