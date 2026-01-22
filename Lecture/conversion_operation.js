let score="22"
let scoreForBool=true
let scoreForNull=null
let scoreforUndefined;
// null is empty value and undefined is variable declared but not assigned
console.log(typeof(score))
console.log(typeof(scoreForBool))
console.log(typeof(scoreForNull))
console.log(typeof(scoreforUndefined))

//conversion of datatypes
let s="23";
let sConvert=Number(s);
console.log(typeof(sConvert));

let s1="abs"
let s1Convert=Number(s1)
console.log(s1Convert)// if "23" number converts in number, but if "abc" is number it shows NaN as o/p  i.e, string cannot convert to number 

/*Activity-01 (HW)
->conversion operations of all data types
*/


//Arithmatic operations
let str1="hello"
let str2=" Satyajeet"
console.log(str1+str2);

//conversions
console.log("1"+2);
console.log("1"+2+2);
console.log(1+3+"2");
console.log((3+4)*5%3);
// js only automatically converts a string to number in arithematic operations

