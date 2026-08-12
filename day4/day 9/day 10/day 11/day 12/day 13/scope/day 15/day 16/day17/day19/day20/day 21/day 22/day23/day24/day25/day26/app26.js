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

let person = {
    name:"Naman",
    age:20,
    gender:"M",
    city:"Pune"
}
let {name,age,...obj} = person;
console.log(name,age,obj); //Naman 20 { gender: 'M', city: 'Pune' }