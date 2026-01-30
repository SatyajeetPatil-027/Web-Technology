// Activity : all types of string should be practiced
 //slice()
const slicedString=gameCount.slice(0,5);
console.log(slicedString);
//substring()
const substring=gameCount.substring(0,5);
console.log(substring);
//replace()
const replacedString=trimmedString.replace("Swarup","Swarupanand");
console.log(replacedString);
//includes()
const includesResult=gameCount.includes("Swa");
console.log(includesResult);
//split()
const splitString=gameCount.split("a");
console.log(splitString);
//repeat()
const repeatString=gameCount.repeat(3);
console.log(repeatString);
//concat()
const concatString=gameCount.concat(" is learning JavaScript");
console.log(concatString);
//toString()
const num=123;
const numToString=num.toString();
console.log(numToString);
console.log(typeof(numToString));
//padStart()
const paddedStartString=gameCount.padStart(15,"*");
console.log(paddedStartString);
//padEnd()
const paddedEndString=gameCount.padEnd(15,"*");
console.log(paddedEndString);
//lastIndexOf()
const lastIndex=gameCount.lastIndexOf("r");
console.log(lastIndex);
//search()
const searchIndex=gameCount.search("up");
console.log(searchIndex);

 // comments infront of all the method like index