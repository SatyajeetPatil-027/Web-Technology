let arr=[0,1,2,3,4,5,`SJT`]
console.log(arr);

const myArr=new Array(0,1,2,3) // home activity : why we declare like this
console.log(myArr[1]);

// array mehtod
myArr.push(4) //adds element at last of aray
console.log(myArr);

console.log(myArr.pop(4)); //removes elements from last of array
console.log(myArr.unshift(6)); // adds elements at the first 
console.log(myArr.shift());  // removes the element from first
console.log(myArr);

const newArr= myArr.join() //when we join method it providesoutput in string 
console.log(newArr);
console.log(typeof(newArr));




