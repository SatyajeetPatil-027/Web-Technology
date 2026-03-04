console.log("hello world");
x=null;
y=undefined;
console.log(x,y);
fullName="tony Stark";
fullName=25;
console.log(fullName);
MyName="Satyajeet";
console.log(MyName);
/* 
fullName ---> Camel case
fullname ---> normal case
full_name---> snake case
full-name --> kabab case
FullName ---> Pascal case
 */
isFollow=true;
IsFollow=false;
console.log(isFollow,IsFollow);
totalPrice=200;

//let const var
// keyword: nothing but a fixed reserved word.
//let const => introduced in 2015 in an update called ES6 also known as modern js.
let name="satyajeet";
let age=23;
let height="5.7ft"
console.log(name,age,height);

let myAge=20;
myAge=21;
myAge=22;
console.log(myAge);

const herAge=19; // cannot be redeaclared or updated once done.
console.log(herAge); 
const PI=3.14;
console.log(PI);

//Data types
//1) Primitive: number,string,boolean,undefined,null,bigInt,symbol.

let price=400;
console.log(typeof(price));
let name1="Tonyy";
console.log(typeof(name1));
let isBool=true;
console.log(typeof(isBool));
let X;
console.log(typeof(X));
let Y=null;//it is also a type of object.
console.log(typeof(Y));

let g=BigInt(123);

//2) Non Primitive : object
// object => nothing but collection of values,
//note that object stores only the key pair values. and the object are declared using const

const car={
    cCompany: "Toyota",//here cCompany is a key and Toyota is a value.
    cName: "Corolla",
    cModel:2006,
    cEngine:"1.8-Petrol",
    goodCondition: true
};
console.log(car);
// we can access the elements from the object as: car[""]

console.log(car["cCompany"]);
console.log(car["cModel"]);
console.log(car["cEngine"]);

console.log(car["cEngine"]);
console.log(car.cEngine); //both methods are valid

car.cModel+=9
console.log(car.cModel);
//note that we can update the values of keys in const object even if the object is const.

const subject={
    sName:"Satyajeet",
    english: 50,
    maths: 40,
    hindi:45,
    scinece:35,
    sst:50
};
console.log(subject);
subject.maths-=7;
console.log(subject.maths);
subject.scinece+=5;
console.log(subject.scinece);

//activity
const pen={
    pName:"Parker",
    pRating:4,
    pIs_offer:true,
    pIs_Deal:true, 
    pPrice:270,
};
console.log(pen);

const instagram={
    aName:"@patiljeet.027",
    aFollowers: 396,
    aFollowing:440,
    isFollowed:true,
    aPosts:5,
};
console.log(instagram);
console.log(typeof(instagram));
console.log(typeof(instagram.aName));
console.log(typeof(instagram.isFollowed));
