//Scope
// hoisting 
// var is hoisted with keyword undefined
// console.log(a);
// var a =20;
// let and const is also hoisted with the keyword undefined 
// but can not be access  before intilization
// console.log(b);
// let b =20;

// console.log(c);
// const c=30;
// console.log(c);
 // temmporal dead zone:-
 //let and const is also hoisted with the keyword undefined
 // but can not access before initilization till the time variable can not be accessed 
 // variable is on temporal dead zone.
// future scope
// variable ie declared inside a function will only accessible in that function only
// var is reassignment allowed in case of var -- yes 
// const is redeclaration  allowed in case of const -- no
// const is reassignment allowed in case of const -- no
// let is able for both reassignment and redeclartion-- yes 
// Array 
//-> Array is a collection of items
//let arr = []; array declaration

// let arr = [1,2,3,4];
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[3]);
// index = starts from 0 ,1 ,2 ,3 

// // length property 
// console.log(arr.length);
// print all the items of the array
// let arr = [1,2,3,4];
// for(let i =0; i<arr.length; i++){
//        console.log(arr[i]);
// }
// in a class there is a students
// store their names and print it.
// let arr= ["ajay", "adyansh", "kundan", "aditya", "ravi"];
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// given an array find the sum of all the numbers
// let arr = [1,2,3,4];
// let sum =0;
// for(let i =0; i<=arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);
let arr = [1,2,3,4];
let sum =0;
for(let i =0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum);