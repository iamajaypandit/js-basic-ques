//check palindrome
// let arr = [1,2,1];
// for(let i = arr.length-1; i<0; i--){
//     newArr.push(arr[i]);
// }
// let isPalindrome = true;
// for(let i = 0; i>arr.length; i++ ){
//        if(arr[i]!=newArr[i]){
//         isPalindrome=false;
//         break;
//        }
// }
// console.log(isPalindrome);
//shallow

// let arr = [1,2,3[4,5]];
// let newArr = arr.slice();
// newArr[3].push(5);
// console.log(arr); // [1,2,3[4,5]]
// console.log(newArr); //
// [1,2,3[4,5,5]]


//In deep array 
// let arr = [1,2,[5,8,6]]
// let newArr = structureClone(arr);
// newArr[2].push(9);
// console.log(arr); // [1,2,[5,8,6]]
// console.log(newArr); // [1,2,[5,8,6,9]]
//Spread OPerator = it expands an iterable (arr,obj) to individual item. we use reprsent spread = (...arr)
// prints individual items 
// it gives = of shallow copy
// let arr = [1,2,3,4];
// let newArr =[...arr];
// console.log(...arr); // 1 2 3 4
// console.log(newArr); //[1,2,3,4]
// Merge
// let arr1 =  [1,2,3,4];
// let arr2 = [5,6,7,8];
// let merged = [...arr1,...arr2];
// console.log(merged);  //[
 // 1, 2, 3, 4,
  //5, 6, 7, 8
//]

// // Add Element 
// let arr3 = [1,2,3,4];
// let arr4 = [...arr3,8];
// console.log(arr4); //[ 1, 2, 3, 4, 8 ]

// //Start 
// let arr5 = [1,2,3,4];
// let arr6 = [8,...arr5,];
// console.log(arr6);  //[ 8, 1, 2, 3, 4 ]

// function argument 
// function sum(a,b,c){
// return a+b+c;
// }
// let arr7 = [1,2,3];
// console.log(sum(arr[0],arr[1],arr[2]));//6
// console.log(sum(...arr7)); //6

//Array Destructing
let arr = [1,2,3];
// let a = arr[0], b = arr[1], c = arr[2];
// console.log(a,b,c); // 1 2 3


//arr destructing 
let [a,b,c] = arr;
console.log(a,b,c);//1 2 3

// destructing the first element 
let arr = [1,2,3,4];
let [a] = arr; 
console.log(a); // 

// skip element 
let arr = [1,2,3];
let [a,c] = arr;
console.log(a,c); // 1 3

// extract extra
let arr = [1,2,3];
let [a,b,c,d] = arr;
console.log(a,b,c,d); //1 2 3 undefined 

//default value
let arr = [1,2];
let [a,b,c=10] = arr;
console.log(a,b,c); //1 2 10

//predict the output 
let arr  = [1,2,3]
let [a,b,c=10] = arr;
console.log(a,b,c); // 1 2 3
 
//rest operator
// rest pack multiple values inside an array
let [a,b, ...arr] = [1,2,3,4,5];
console.log(a,b,arr); // 1 2[3,4,5]