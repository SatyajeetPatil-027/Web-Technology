 //comments are the part of the code that is not executed.

//Operators: these are used to perform the operations on the data.
//1) Arithmetic operators
let  a=12,b=7
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);//returns the remainder.
console.log("a^b=",a**b);//returns the exponential power or value.

//2) Unary operators: type of arthmatic op. where two operators require single operand. ex: increment,decremen
let x=5
let y=6
console.log("x",x++);
console.log("y:",y--);

//3)Assignment operators
//in JS when we right in this: a=2 format then the value propagates from right side to left side
let n1=5
console.log("n1=",n1+=1);
console.log("n1=",n1-=1);
console.log("n1=",n1*=1);
console.log("n1=",n1/=3);
console.log("n1=",n1%=1);
console.log("n1=",n1**=2);

//4) Comparision operators: Comparing the values.
//Equal to ==
//Equal too along with type ===
let x1=5
let x2=8
console.log(x1==x2);
console.log(x1===x2);//will return boolean values
x1=6
x2="6"
console.log(x1==x2);//will return true becausethe js will convert the string implicitly into number then compare it with the another

//in case we want that the string and number should not be compared equally then in such cases we use this: === it is the strict version, ex:
x1=7
x2="7"
console.log(x1===x2);//false

let s1=10
let s2=100
console.log("> or <");
console.log(s1>s2);
console.log(s1<s2);
console.log(s1>=s2);
console.log(s1<=s2);
console.log(s1!==s2);
console.log(s1!=s2);

/*5) Logical operators: 
 AND(&&) :Both values should be true,
 Or(||) : atleast one value should be true,
 NOT(!): returns opposite output.
 */


//Conditional statements: these are used to perform the operations based on the conditions.
//there are three types of conditional statements: if, else if, else

let age=14
if (age>=18) {
    console.log("you can vote");
}

let mode
if(mode==="dark"){
    console.log("dark mode is on");
}
if(mode==="light"){
    console.log("light mode is on");
}

//if else
let light="white"
if(light==="white"){
    console.log("bright");
}
else{
    console.log("dimm");
}

//syntax is nothing but the rules that govern the structure of the code. It is the set of rules that defines how the code should be written and interpreted by the computer.

//else-if

let theme="dark"
if(theme==="white"){
    console.log("It's white theme.");
} else if(theme==="dark"){
    console.log("It's dark theme.");
}else{
    console.log("Light gelayy!!!");
}

//single line if statement
let pet="dog"
if(pet==="dog") console.log("its a dog");

//ternary operator: it is a shorthand for if-else statement. It is used to assign a value to a variable based on a condition. The syntax is: condition ? value if true : value if false
// syntax: condition ? true output : false outtput, here is an xample:

let car="Toyota"
console.log(car==="Bmw"? "Right ans" : "Wrong ans");

let gender="yash"
console.log(gender==="male"? "A man": "A woman");

//MDN docs.

//activity
alert("hello world");// its a pop up msg
//prompt("Enter thr msg"); these are temporary form to input .

// myName=prompt("Enter your name");
// console.log("hello,",myName);


Number=prompt("Enter a number");
if(Number%5===0){
    console.log(Number,"is a multiple of 5");
} else {
    console.log(Number,"is not a multiple of 5");
}
