// for loop, while , do while, 
// print 1 to 5;
// for(let i=0; i<=10; i++){
//     console.log("yaya!!");
// }

// calculate sum of 1 to 5

// let sum =0;
// for(let i=1; i<=5;i++){
//  sum =sum+i;  // 0+1=1; 1+2=3; 3+3=6; 6+4=10 ; 10+5=15
// }
// console.log("sum =", sum);

//2. infinite loop:- loop that never ends.
//3. while loop 

// let i=1;
// while(i<=10){
//     console.log("heyy hii");
//     i++;

// }

// 4. do-while loop
// let i=1;
// do{
//     console.log("heyy hii");
//     i++;
// }while(i<=5);

// 5. for-of-loop
// let size=0
// let str ="AshwiniSutkar";
// for (let i of str){
//     console.log("i=", i);
//     size++;
// }
// console.log("size=", size);

// object 
// let student ={
//     name: "Ashwini",
//     age: 23,
//     cgpa:8.45,
//     isPass:true,
// };

// for(let key in student){
//     console.log("key=", key, " value=", student[key]);
// }

// 1.que:- Print all even Number from 0 to 100.
// let  sum=0;
// for(let i=0; i<=100; i++){
//     if(i%2==0){   // for even number condition and odd just write ( i%2!==0)
//         console.log("i= ", i);
//     }
// }


// STRING   
// 1. create 
let str = "Ashwini "
 console.log(str);
// string length 
// str.length;
// console.log(str.length);
// // dtring indices
// str[0], str[1], str[2]
// console.log(str[0]);

//1. template literal (``)
//2. interpolation ${expression}
//3. \n :- next line start  \t :- tab space gives between two text

// STRING METHODS
// 1. str.toUpperCase()
// let newstr= str.toUpperCase()
// console.log(newstr);
// 2. str.toLowerCase()
// let newstr= str.toLowerCase()
// console.log(newstr);
// 3. str.trim()
// let newstr= str.trim()
// console.log(newstr);
// 4. str.slice(start,end)
let str1= "hello"
console.log(str1.slice(1,3));
//5. str.concat(str2)
console.log(str.concat(str1));
//6. str.replace(searchVal, newVal)
console.log(str1.replace("o", "p"));
// 7 str.charAt(idx)
console.log(str1.charAt(0));
