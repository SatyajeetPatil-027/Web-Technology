//Activity - 01 
//Declare Array,Function,Object 
let array=[1,2,3,4,5]
console.log(`elements of array`,array)

function call(){
    console.log(`Satyajeet`)
}
console.log(call())

//Activity - 02
//Reverse A Number-my.floor
let n = 1234;
let rev = 0;

while (n > 0) {
  rev = rev * 10 + n % 10;
  n = Math.floor(n / 10);
}

console.log(rev);

//Activity - 03
//Check Palindrome number
let n1 =999;
let temp = n1;
let reverse = 0;

while (temp > 0) {
  reverse = reverse * 10 + temp % 10;
  temp = Math.floor(temp / 10);
}
if(n1 == reverse){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome");
}

//Activity - 04
//Fibonacci series
let a = 0 
let b = 1
const n2=8
console.log("Fibomacci Series:");
for (let i = 1; i <=n2 ; i++) {
  console.log(a);
  let c = a + b;
  a = b;
  b = c;
}

//Activity - 05
//laregest num in array
let arr1 =[3, 8, 25, 10, 15];
let max =arr1[0];

for (let i =1; i< arr1.length; i++) {
  if (arr1[i] > max){ 
    max= arr1[i];
  }
}
console.log(`maximum number:`,max);

//Activity - 06
//remove duplicate in array

//Activity - 07
//find missing num in array
let arr = [10, 20, 40, 50];
let sum = 0;

for (let i= 0;i< arr.length;i++) {
  sum += arr[i];
}

console.log(`missing number is:`,150 - sum);


//String
//Activity - 08

//Activity - 09
//reverse string
let str1 = "Satyajeet";
let reverse2 = "";

for (let i = str1.length - 1; i >= 0; i--) {
  reverse2 += str1[i];
}

console.log(`Reversed String:`,reverse2);

//Activity - 10
//count vowels in string
let str2 = "hello world";
let count = 0;

for (let i = 0; i < str2.length; i++) {
  if ("aeiou".includes(str2[i])){
    count++;
  }
}
console.log(count);


//Activity - 11
//check palindrome in string

//Number
//Activity - 12
//check prime num
let num3 = 3;
let count1 = 0;

for (let i = 1; i <= num3; i++) {
  if (num3 % i == 0) {
    count1++;
  }
}

if (count1 == 2) {
  console.log("Prime number");
} else {
  console.log("Not prime number");
}

//Activity - 13
//Check factorial
let num4= 5;
let fact = 1;

for (let i = 1; i <= num4; i++) {
  fact = fact * i;
}
console.log(fact);

//Function
//Activity - 14
//function to find even odd
function checkNum(n) {
  return n % 2 == 0;
}

console.log(checkNum(27));

//Activity - 15
//function to find sum of array
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(arrSum([11,22,33,44,55]));

