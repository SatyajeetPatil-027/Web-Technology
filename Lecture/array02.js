const superHeroes=[`hanuman`,`batman`,`captain america`, `thor`,`Satyajeet`]
let superHeroes2=[`ironman`,`hulk`,`antman`,`dr strange`,`vision`]

// superHeroes.push(superHeroes2)
// console.log(superHeroes);
// console.log(superHeroes[3]);
// console.log(superHeroes[2][2]);

superHeroes.concat(superHeroes2)
console.log(superHeroes);

const anotherArray= [1,2,3,[4,5,6],7,[6,7,[4,5]]] // nested array: array inside array.
const realanotherArray=anotherArray.flat(Infinity)  //flat: to convert nested array into single array.
console.log(realanotherArray);

console.log(Array.isArray(`satyajeet`)); //isArray used for data scripting 
console.log(Array.from(`Satyajeet`)); //prints each element individually
console.log(Array.from({name:`Satyajeet`,age:20})); //gives empty array directly, not converted into key value

let score1 =100
let score2=200
let score3=300

console.log(score1,score2,score3);
console.log(Array.of(score1,score2,score3));
