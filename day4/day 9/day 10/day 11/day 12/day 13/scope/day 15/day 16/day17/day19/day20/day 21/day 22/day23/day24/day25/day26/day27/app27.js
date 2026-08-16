// let persons=[
//     {
//         name:"Abhishek",
//         city:"Pune"
//     },
//     {
//         name:"Pawan",
//         city:"Pune"
//     },
//     {
//         name:"Hemant",
//         city:"Lucknow"
//     }
// ]
// // Question  group by city

// // output 
// //{
// // Pune:["Abhishek","Pawan"],
// //Lucknow:["Heman"]
// //}
// let result ={};
// for(let person of persons){
//     if(person.city in result){
//         result[person.city].push(person.name);
//     }else{
//         result[person.city]=[person.name];
//     }
// }
// console.log(result);

// Question 2

// let persons=[
//     {
//         name:"Abhishek",
//         address:{
//         city:"Pune"
//         }
//     },
//     {
//         name:"Pawan",
//         address:{
//         city:"Pune"
//         }
//     },
//     {
//         name:"Hemant",
//         address:{
//         city:"Lucknow"
//         }
//     }
// ]

// let result ={};
// for(let person of persons){
//     if(person.address.city in result){
//     result[person.address.city].push[person.name];
// } else {
//     result[person.address.city]=[person.name];
// }
// }
// console.log(result);

// obj destructuring 
// // predict output
// let person={
//     name:"abhi",
//     city:"Pune"
// }

// let user = person;
// console.log(user);
// console.log(user==person);
//o/p:
//{ name: 'abhi', city: 'Pune' }
//true

// // predict op
// let person={
//     name:"abhi",
//     city:"Pune"
// }

// let user = person;
// console.log(person,user);
// user.age=10;
// console.log(person);
// console.log(user==person);
//{ name: 'abhi', city: 'Pune' } { name: 'abhi', city: 'Pune' }
//{ name: 'abhi', city: 'Pune', age: 10 }

// spread operator
// let person={
//     name:"abhi",
//     city:"Pune"
// }
// let user ={...person};
// user.age=10;
// console.log("user",user);
// console.log("person",person);
//o/p
//user { name: 'abhi', city: 'Pune', age: 10 }
//person { name: 'abhi', city: 'Pune' }

// let person = {
//     name:"Abhi",
//     age:10,
//     address:{
//         city:"Pune"
//     }
// }

// let user = {...person};
// user.gender="M";
// user.address.pincode ='411045';
// console.log(person);

// spread operator creates shallow copy
// shallow copy-> copy the items of first level and share the nested level

// user case of spread 
// copy

// update add prop
// let person = {
//     name:"abhi",
// //     age:20
// // }
// // let user = {...person,age:30,gender:'M'};
// // console.log(user);


// // Deep Copy -> copy all the items of one ovject to another .No shared reference

// // structredClone

// let person ={
//     name:"Abhi",
//     age:20,
//     address:{
//         city:"Pune",
//         pincode:"411045"
//     }
// }

//  let user = structuredClone(person);
//  let user1 = {...person}
// // user.address.]
//  console.log("User deep copy :", user);
//  console.log("User shallow copy :", user1);

// // linear serach 
// // let arr =  [4,5,6,9,8];
// // let target =9;
// // function search(arr,target){
// // for(let i=0; i<arr.length; i++){
// //     if(arr[i] === target){
// //        return true;
// //     }
// //     return false;
// // }
// // }
// // console.log(search(arr,target));

// let student = [
//     {
//         name:"Abhi",
//         class:9
//     },
//     {
//         name:"Aakriti",
//         class:10
//     },
//     {
//         name:"sandeep",
//         class:12
//     }
// ];


// let target =sandeep;

// function search(arr, target){
//     for (let item of arr){
//         if(item.name === target){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(search(student, target));

// let arr = [1,2,3,4];
// let sum =0;
// for(let i = 0; i<arr.length; i++){
//     sum=sum+arr[i];
// }
// console.log(sum);
// let arr = [1,2,3,4,12];
// let max=arr[0];
// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//     max=arr[i];
//     }
// }
// console.log(max);
// let a =8;
// console.log(a);
//  a=9;
// console.log(a);
// function print(){
//     let num = 8;
//  console.log(num);
// }
// print();
// console.log(num);

// var a=11;
// console.log(a); // in acse of var the variable will be assigned as undefined
//  var a =7;
//  console.log(a);

//  function print(){
//     var a = 4;
//     console.log(a);
//  }
//  print();
//  console.log(a);
// const num=9;
// console.log(num);
// num =10;
// console.log(num);
// function print(){
//    const num=9;
//     console.log(num);
// }
// print();
// console.log(num);

// let x = 10;
// function outer(){
//     let x = 20;
//     if(true){
//         let x = 30;
//         console.log(x);
//     }
//     console.log(x);
// }
// outer();
// console.log(x)

// const user = {
//     name:"Riya",
//     address: { city: "Pune", pincode: 411045}
// };
// // console.log(user);
// function findFactorial(n){
//     let factorial =1;
//     for(let i =0; i<=n; i++){
//         factorial*=i;
//     }
//     return factorial;
// }
// console.log(findFcatorial(9));
let str = "apple";
let reversedStr ="";
for(let i =str.length -1; i>=0; i--){
    reversedStr += str[i];
}
console.log(reversedStr);