// activity-1
let fName = "Yash";
let lName = "Patil";
let age = 20;
let dept = "Ai/ML";
let div = "b";
let rollNo = 109;
let grade = "A+";
let pass = true;

console.log("First name :", fName);
document.writeln(fName + "<br>");

console.log("Last name :", lName);
document.writeln(lName + "<br>");

console.log("Age :", age);
document.writeln(age + "<br>");

console.log("Department :", dept);
document.writeln(dept + "<br>");

console.log("Division :", div);
document.writeln(div + "<br>");

console.log("Roll no :", rollNo);
document.writeln(rollNo + "<br>");

console.log("Grade :", grade);
document.writeln(grade + "<br>");

console.log("Is passed? :", pass);
document.writeln(pass + "<br><br>");


// activity-2
let num1 = 20;

if (num1 % 2 === 0) {
    console.log("Even number.");
    document.writeln(num1 + "<br><br>");
} else {
    console.log("Odd number.");
    document.writeln(num1 + "<br><br>");
}


// activity-3
let marks = 10;

if (marks >= 40) {
    console.log("Pass.");
    document.writeln(marks + "<br><br>");
} else {
    console.log("Fail.");
    document.writeln(marks + "<br><br>");
}


// activity-4
let num2 = 10;

for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.writeln(i + "<br>");
}

document.writeln("<br>");


// activity-5
let x = 10;
let y = x;

{
    let y = 20;
    console.log(x, y);
    document.writeln(x + " " + y + "<br>");
}

console.log(x, y);
document.writeln(x + " " + y);
