function addNum(n1,n2){
    return n1+n2 
}
console.log(addNum(3,4));

function add(num1,num2){
    let result=num1+num2
    return result;                // once if we write return function nothing will be executed 
    //console.log(add(10,20));
    
}
console.log(add(10,20));


function loginUser(userName){
    return `${userName},logged in`
}
console.log(loginUser(`Satyajeet`));
console.log(loginUser());  // when string is empty 

function myfunction(...x1){  //spread operator it combines all the elements in single array
    return x1;
}
console.log(myfunction(200,300,400));


const myObj={
    name:"satyajeet",
    age:20
}
function handleObj(anyObj){
    console.log(`my name is: ${anyObj.name}`);
    console.log(`age: ${anyObj.age}`);
}
console.log(handleObj(myObj));

const arr1=[1,2,3,4,5]
const arr2=["car","bike","truck","bus","cycle"]

function handleArr(anyArr){
    console.log(`the number is: ${anyArr[1]}`);
    console.log(`the vehicle is: ${anyArr[2]}`);
}
console.log(handleArr(arr1,arr2));

//arrow functions 

const addNums=(a1,a2) =>
{
    return(a1+a2)
}
console.log(addNums(3,5));

const fun1=function coffee(){
     user="satyajeet "
    console.log(this.user);
}
fun1();

const arrowFun=() =>{
    user="Satyajeet"
    console.log(this.user);
}
console.log(arrowFun());

/*activity:
write a code for switch case in js
code for arrow fun with 2 example
how to use truthy and falsy in js with exmples
how to use ternery operators in js
code for how to use loops in array
while,do while,for, for each,for off,for in
difference between for off and for in
how to use map and filter function in js
*/

// 1) Swicth case program
let month=3

switch(month){
    case 1:
        console.log("January");
        break
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break
    case 4:
        console.log("April");
        break
    case 5:
        console.log("May");
        break
    case 6:
        console.log("June");
        break
    
        default:
            console.log("Invalid!");
            
}

//arrow funtion 