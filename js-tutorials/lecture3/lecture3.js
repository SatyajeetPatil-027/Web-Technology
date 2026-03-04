//loops: these are the part of code that execute piece of code again and again
//1. for loop:(initialize, stoping condn,upadating)
/*
for(let i=0;i<=9;i++){
    console.log("hello world");   
} console.log("loop ends here");

let sum=0
let n=prompt("enter the value of n");
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log("sum is:",sum);
*/
//suppose I declared i inside for loop as let i, then it will be accesible only inside the loop, but instead I declare it as var i then it is accessible otuside the for loop also, but never use the var.

//infinite loop: A loop that never ends.

//2.while loop: another type of loop, syntax: while(stopping condition){code to be executed}
//genrally we do all initialization before the loop and updation inside the loop
/*
let i=1;
while(i<=7){
    i++;
    console.log(i);
}

console.log("fin x value.");
let x=prompt("enter thr value for x.");
let num=0;
let sum=0;
while(num<=x){
    sum+=num;
    num++;
}
console.log("x value:",x);
console.log("Sum is:", sum);
*/

//3.do-while loop: here the condition is checked at the last. So in do-while loop we guarranty that loop will execute at least once. 

//Syntax: do{code to be executed} while(stopping condition);

let A=1;
do{
    console.log(A);
    A++;
}
while(A<10);

//4. for-of loop: help to run loop on string and arrays but we dont use it foe object.
let str="hello world";//in itera
for(let val of str){
    console.log(val);
    
}

//5. for-in loop : this we can use both for arrays as well as objects.
//basiclly returns keys of any objects
const india={
    iName:"country",
    iStates: 28,
    iLanguage:"hindi",
    iPM:"Narendra Modi",
    iCultural: true
};
for(let key in india){
    console.log(key);//display only key
    console.log(india[key]);//dispaly value of key
}

//activity:
for(let Num=0;Num<=100;Num++){
    if(Num%2===0){
        console.log(Num);
    }
}



let gameNum=90;
let guessNum=prompt("Enter the number.");
while(guessNum!=gameNum){
    guessNum=prompt("You guessed wrong, try again.");
}
console.log("You guessed it right.");


//STRINGS: its a sequence of characters, we can use single or double quotes to declare a string.

