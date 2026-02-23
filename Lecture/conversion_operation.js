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
// JAVASCRIPT TYPE CONVERSIONS
// 1. IMPLICIT CONVERSION
// String Conversion with +
console.log(10 + "20");          
console.log(true + "hi");        
console.log(null + "abc");       

// Number Conversion with arithmetic
console.log("10" - 5);           
console.log("6" * "2");          
console.log(true + 1);           
console.log(false + 5);          
console.log(null + 5);           
console.log(undefined + 5);      

// Boolean Conversion in conditions
console.log(Boolean("hello"));   
console.log(Boolean(0));         

// 2. EXPLICIT CONVERSION

// Convert to String
console.log(String(123));        
console.log(String(true));       
console.log((100).toString());   

// Convert to Number
console.log(Number("123"));        
console.log(Number("123abc"));     
console.log(parseInt("123abc"));   
console.log(parseFloat("10.5"));   
console.log(Number(true));         
console.log(Number(false));        
console.log(Number(null));         
console.log(Number(undefined));    

// Convert to Boolean
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("hello"));  // true
console.log(Boolean(null));     // false

// 3. NULL CONVERSION
console.log(Number(null));      // 0
console.log(String(null));      // "null"
console.log(Boolean(null));     // false

// 4. UNDEFINED CONVERSION
console.log(Number(undefined));     // NaN
console.log(String(undefined));     // "undefined"
console.log(Boolean(undefined));    // false

// 5. ARRAY CONVERSION

console.log(Number([5]));        // 5
console.log(Number([1,2]));      // NaN
console.log(String([1,2,3]));    // "1,2,3"
console.log(Boolean([]));        // true

// 6. OBJECT CONVERSION

console.log(Number({}));         // NaN
console.log(String({}));         // "[object Object]"
console.log(Boolean({}));        // true

// 7. COMPARISON CONVERSIONS

// Loose Equality (==)
console.log(5 == "5");             // true
console.log(false == 0);           // true
console.log(null == undefined);    // true
console.log([] == false);          // true
console.log({} == false);          // false

// Strict Equality (===)
console.log(5 === "5");            // false
console.log(null === undefined);   // false

// 8. STRING vs NUMBER OPERATIONS

console.log("5" - 2);     // 3
console.log("5" + 2);     // "52"

// 9. FALSY VALUES CHECK

console.log(Boolean(false));   // false
console.log(Boolean(0));       // false
console.log(Boolean(-0));      // false
console.log(Boolean(0n));      // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false

// Everything else is truthy
console.log(Boolean("JS"));   // true
console.log(Boolean(123));    // true
console.log(Boolean([]));     // true
console.log(Boolean({}));     // true


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

