// non prim: array,funtions,object

 const anotherId=Symbol("23")
 console.log(anotherId);

 let id=23
  console.log(id===anotherId);

//js is a dynamic language

//Array
let a1=[1,2,3,4,5]
 console.log(a1);

//object declaration
const myObject={
    Name:"adii",
    age:20,
    email:"qwert45"
}
 console.log(myObject)

 //functions
function call()
{
     console.log("yash")
}
 console.log(call())

// function declaration
let a = 10;
let b = 20;

function add(x, y) {
  return x + y;
}
let result = add(a, b);

console.log(result);
//function defn calling 

/*memory: 
there are 2 types: stack(for primitive datypes), heap(for non-primitive datatypes)
example (stack):
*/
//example1
let ytChannel="SSP"
let newYtChannel=ytChannel
console.log(ytChannel)      //primitive datatypes store in stack when we assign a variable to another a
                            //  copy is made so changing one does not affect another variable.
console.log(newYtChannel);

//example2
let myObj={
  fName:"Satyajeet",
  age:22,
  id:23
}

let myObj2=myObj;
 myObj2.id=25
 console.log(myObj2.id)   //objects are stored in heap memory when we assign one object to another variable the reference/address is 
                          // copied  not the value when we change value of one variable the value of both variable will be changed.
 console.log(myObj.id);