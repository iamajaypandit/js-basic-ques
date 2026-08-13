// // 
// //let arr = [1,2,3,4,5,5,5,5];
// //  let freq ={};
// //  for(let i =0; i<arr.length; i++){
// //     if(arr[i] in freq == false){
// //         freq[arr[i]] = 1;
// //     }
// //     else{
// //         freq[arr[i]]=freq[arr[i]]+1;
// //     }
// //  }
// // console.log(freq);
// //let libraries= {
// //     name:"Accio",
// //     location: "Pune",
// // books:[
// //     {
// //         name:"Atomic",
// //         author:"RD Sharma",
// //         publisher:"pragti"
// //     },
// //     {
// //      name:"Phyics",
// //      author:"RD Sharma",
// //      publisher:"PW"
// //     },
// //     {
// //         name:"Maths",
// //         author:"Rs Aggarwal",
// //         publisher: "S.Chand"
// //     },
// //      {
// //     name:"Accio1",
// //     location: "Pune",
// //      }
// // books:[
// //     {
// //         name:"Atomic",
// //         author:"RD Sharma",
// //         publisher:"pragti"
// //     },
// //     {
// //      name:"Phyics",
// //      author:"RD Sharma",
// //      publisher:"PW"
// //     },
// // ], 

// // ]
// // }
// let libraries = [
//   {
//     name: "Accio1",
//     location: "Pune",
//     books: [
//       {
//         name: "Atomic Habits",
//         author: "James Clear",
//         publisher: "Penguin"
//       },
//       {
//         name: "Physics",
//         author: "HC Verma",
//         publisher: "NCERT"
//       }
//     ]
//   },
//   {
//     name: "Accio2",
//     location: "Delhi",
//     books: [
//       {
//         name: "Mathematics",
//         author: "RD Sharma",
//         publisher: "Pragati"
//       },
//       {
//         name: "Chemistry",
//         author: "OP Tandon",
//         publisher: "GRB"
//       }
//     ]
//   }
// ];

// // Print karne ke liye (Looping through libraries and books):
// libraries.forEach((lib) => {
//   console.log(`--- Library: ${lib.name} (${lib.location}) ---`);
  
//   lib.books.forEach((book) => {
//     console.log(`Book Name: ${book.name}, Author: ${book.author}, Publisher: ${book.publisher}`);
//   });
  
//   console.log("\n");
// });

// // print names of trhe libarary
// for(let library of libraries){
//     console.log(linrary.name+" "+library.location);
// }

// // write to find the freq of array
// let arr = [1,2,2,3,3,3,4,5];
// let freq={};
// for(let i=0; i<arr.length; i++){
//     if(arr[i] in freq==false){n
//         freq[arr[i]]=1;
//     }
//     else{
//         freq[arr[i]]=freq[arr[i]]+1;
//     }
// }
// console.log(freq);

// // grade by groups
// let students = [
//     {name:"abhi", grade:"A"},
//     {name:"rakhi", grade:"C"},
//     {name:"ajay", grade:"A"},
//     {name:"kundan", grade:"B"}
// ]

// let res =[]
// for(let student of students){
//     if(student.grade in res){
//         res[student.grade].push(student.name);
//     }
//     else{
//         res[student.grade]=[student.name];
//     }
// }
// console.log(res);
// [ A: [ 'abhi', 'ajay' ], C: [ 'rakhi' ], B: [ 'kundan' ] ]

// object destructing 
// extract the value of  the object in a variable
// let person = {
//     name:"Naman",
//     age:20
// }
// let  {name,age} = person;
// console.log(name,age); 

// renaming the variable
// let person = {
//     name:"Naman",
//     age:20
// }
// let {name:firstName,age:currAge} = person;
// console.log(name,age); / // wrong h 

// let person = {
//     name:"Naman",
//     age:20,
//     gender:"M",
//     city:"Pune"
// }
// let {name,age,...obj} = person;
// console.log(name,age,obj); //Naman 20 { gender: 'M', city: 'Pune' }

// let students = [
//     {name:"Abishek",grade:"A"},
//     {name:"Kishan",grade:"B"},
//     {name:"Tarun",grade:"C"},
//     {name:"Arun",grade:"A"},
// ]

// let result = [];

// for(let student of students){
//     let grade = student.grade;

//     if(!result[grade]){
//         result[grade] = [];
//     }

//     result[grade].push(student.name);
// }

// console.log(result);

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
//     age:20
// }
// let user = {...person,age:30,gender:'M'};
// console.log(user);


// Deep Copy -> copy all the items of one ovject to another .No shared reference

// structredClone

// let person ={
//     name:"Abhi",
//     age:20,
//     address:{
//         city:"Pune",
//         pincode:"411045"
//     }
// }

// let user = structuredClone(person);
// user.address.
// console.log(user);

// linear serach 
// let arr =  [4,5,6,9,8];
// let target =9;
// function search(arr,target){
// for(let i=0; i<arr.length; i++){
//     if(arr[i] === target){
//        return true;
//     }
//     return false;
// }
// }
// console.log(search(arr,target));

let student = [
    {
        name:"Abhi",
        class:9
    },
    {
        name:"Aakriti",
        class:10
    },
    {
        name:"sandeep",
        class:12
    }
];


let target =sandeep;

function search(arr, target){
    for (let item of arr){
        if(item.name === target){
            return true;
        }
    }
    return false;
}
console.log(search(student, target));

