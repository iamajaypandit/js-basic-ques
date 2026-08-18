// // function sortHalfAscHalfDesc(arr) {
// //     const mid = Math.floor(arr.length/2);
// // //     const firstHalf = arr.slice(0, mid).sort((a,b) => a - b);
// // //     const secondHalf = arr.slice(mid).sort((a,b) => b - a);
// // //     return firstHalf.concat(secondHalf);
// // // }
// // // const numbers = [5,6,8,3,4,2,0,1,7,9];
// // // const result = sortHalfAscHalfDesc(numbers);
// // // console.log("Original Array:", numbers);
// // // console.log("Output Array:", result);

// // // Approach 2
// // // ascending an ddscending order for even odd numbers in the array
// // let arr = [5,3,2,4,7,6,9,8,10,1];
// // let even = [];
// // let odd = [];
// // for(let i = 0; i<arr.length; i++){
// //     if(arr[i]%2!==0){
// //         odd.push(arr[i]);
// //     }else{
// //         even.push(arr[i]);
// //     }
// // }
// // odd.sort((a,b)=>b - a);
// // even.sort((a,b) => a -b);
// // let result = odd.concat(even);
// // console.log(result);

// // // prime and non prime ascending and descending 
// // let arr1 = [5,3,2,4,7,6,9,8,10,1];
// // let prime = [];
// // let nonPrime = [];
// // function isPrime(num) {
// //     if(num <= 1) return false;
// //     for(let i =2; i <= Math.sqrt(num); i++) {
// //      if (num % i ===0) return false;
// //     }
// //     return true;
// // }
// // for(let i = 0; i < arr.length; i++){
// //     if(isPrime(arr[i])){
// //         prime.push(arr[i]);
// //     }else{
// //         nonPrime.push(arr[i]);
// //     }
// // }
// // prime.sort((a,b) => a - b);
// // nonPrime.sort((a,b) => a - b);
// // console.log("Prime Numbers:", prime);
// // console.log("Non-Prime Numbers:", nonPrime);


// let students = [
//     {
//         name:"SHarvan",
//         attendence:"50%",
//         marks:35,
//         totalMarks:70
//     },
//     {
//         name:"Himanshu",
//         marks:40,
//         attendence:"70%",
//         totalMarks:90,
//     },
//     {
//         name:"Manak",
//         marks:50,
//         attendence:"60",
//         totalMarks:100
//     }
// ];
// // student should have more than 55% attendence and scored atleast 50% marks are passed.
// //  print an array consisting of the names of the passed student.
// let result =[];
// for(let student of students){
//     let percentageMakers = student.marks/student.totalMarks*100;
//     if(percentageMakers>= 50 && student.attendence > "55%"){
//         result.push(student.name);
//     }
//  }
// console.log(result);

// //string comaprison
// let str1="125";
// let str2="50";
// console.log(str1>str2); 

// let str3="Apple";
// let str4="Apble";
// console.log(str3>str4);

// console.log("A">5);
// console.log("A">"5");
// console.log("@">"B");

// // Sort()
// // sort method is used for sorting
// //arr.sort(comp);

// //let arr = [5,3,6,7,4,2,9,1];
// //arr.sort();
// //console.log(arr);


// //let arr =["Raman","Shyam","Abhishek"];
// //arr.sort()
// //console.log(arr);

// //predict the output
// //let arr=[12,5,4,0,11,];
// //arr.sort()
// //claconsole.log(arr)
// //- now we dont t start thr number in lexicographically and we want to sort
// // in acending order


// let sp=[2,4,5,7,65,6];
// sp.sort()
// console.log(sp);




// ///sortthr array by marks

// // let arr=[{marks:12},{marks:5},{marks:4},{marks:0},{marks:11}];
// // functioncomp(arr,b){
// //     return a.marks-b.marks;

// // }
// // arr.sort(comp);
// // console.log
// // now sort the array by descending order of their age ifage is eqal sorted  equal by lexographically
// let person=[
//     {
//        name:"Abhishek",
//        age:20

//     },
//     {
//         name:"Naman",
//        age:21
//     },
//     {
//         name:"Shravan",
//        age:19
//     },
// ]


// function comp(a,b){
//     return b.age - a.age;
// }

// person.sort(comp);
// console.log(person);

// sort the students array based on marks and 
// if marks are equal sort it based 
// on age in ascending order

// let students=[
//     {
//        name:"Abhishek",
//        age:20,
//        marks:45

//     },
//     {
//         name:"Naman",
//        age:21,
//        marks:97
//     },
//     {
//         name:"Shravan",
//        age:19,
//        marks:35
//     },
// ]
// function comp(a,b){
    
//     if(a.marks == b.marks)
//         return a.age - b.age;
//     else
//         return b.marks - a.marks;
// }
// students.sort(comp);
// console.log(students);

// let arr3 = [4,8,1,3,6];
// arr3.sort();
// console.log(arr3);

// let arr4 = [12,5,4,0,11];
// arr4.sort((a,b)=>b-a);
// console.log(arr4);

// question 1
// sort the array in ascending order based on length of the words 
// let arr = ["raman", "ram", "atul"];
// function comp(a,b){
//   return a.length - b.length;
// }
// arr.sort(comp);
// console.log(arr);

// localCompare()
// console.log(a.localCompare(b));
// a is lexographically greater -> 1
// b is lexigraphically greater ->1
// same string then -> 0
// let a  = "apple";
// let b = "abple";
// console.log(a.localeCompare(b));

// given a array of  words sort it in reverse lexigraphical order 
// let arr = ["raman", "ram", "atul"];
// function comp(a,b){
//     return b.localeCompare(a);
// }
// arr.sort(comp);
// console.log(arr);

// sort the arr based on age and if age is equal sort it based on lexicographical oreder of name
let students = [
    {
        name: "Abhishek",
        age:30
    },
    {
        name: "Akriti",
        age: 45,
    },
    {
        name: "Aansh",
        age: 45,
    }
];
function comp(a,b){
    if(a.age==b.age)
        return a.name.localeCompare(b.name);
    else
        return a.age-b.age;
}
students.sort(comp);
console.log(students);
console.log(!true);

// let n = 4989384;
// let count =0;
// while(n>0){
//     let last_digit = n%10;
//     count++;
//     n = Math.floor(n/10);
// }
// console.log(count);

// given a num reverse the num
// let n =656753;
// let rev = " ";
// let temp = 0;
// while(n>0){
//     let last_digit =n%10;
//     rev =rev+last_digit;
//     n = Math.floor(n/10);
// }
// console.log(rev);

// approach 2
let n = 7478368298;
let rev =" ";
while(n>0){
    let last_digit = n%10
    rev = rev*10+last_digit;
    n = Math.floor(n/10);
}
console.log(rev);

// question 
let words = 'A paragraph is a group of sentences that revolve around a single main idea, providing clarity and coherence to writing. For example, consider the topic of environmental conservation: Protecting the environment is essential for maintaining the health of our planet and future generations.  ' 
// // select random 5 words
let wordsArr=words.split(" ");
for(let i=0;i<5;i++){
    console.log(wordsArr[Math.floor(Math.random()*(wordsArr.length-1))]);
}



// generate num bw 1 to 10 
let num = Math.floor(Math.random()*10+1);
console.log(num);
