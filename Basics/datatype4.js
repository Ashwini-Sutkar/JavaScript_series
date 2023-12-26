// HITESH CHAUDHARY GITHUB LINK
//github.com/hiteshchoudhary/js-hindi-youtube/blob/main/01_basics/datatypes-summary.js
// https://262.ecma-international.org/5.1/#sec-11.4.3

// PRIMITIVE TYPES
//=>7.   String, NUMBER,  BOOLEAN, NULL, UNDEFINED, Symbol, BigInt

// (RESFERENCES) NON PRIMITIVE TYPE
// =>3.  Array, Object, Function


//  1.Number
const score = 100;  
const scoreValue = 100.3;
// 2. String
const name= "Ashwini"

// 3.Boolean
const IsLoggedIn =false;
// 4.null
const outsideTemp =null;
//5. undefined
 let userEmail;
 //6. symbol
 const id = Symbol('123')
 const anotherId= Symbol('123')
//  console.log(id===anotherId);  // False

//  const bigNumber = 12345678n
//  console.log(bigNumber);



// Non Primitive
// ARRAY 
const arr = ["Ash","Ashu","Ashwini","Hitesh"];

// OBJECT
const obj ={
    Fname: "Ash",
    Lname: "Sutkar"
}

// FUNCTION
const myFunction = function(){
    // console.log("Hello World");
}


// *******************************************************88
//  STACK Memory => All Primitive types mai use 
// HEAP  Memory  => All Non primitive types

let myYoutube ="hitesh@google.com";

let anothername = myYoutube;
anothername ="chaiwithcode";

console.log(anothername);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email ="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);