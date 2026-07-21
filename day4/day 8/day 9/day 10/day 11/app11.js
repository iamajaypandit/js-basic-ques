//check prime number 
// let n = 7878;
//   let count = 0;
//   for(let i=1; i<=n; i++){
//     if(n%i==0){
//       count++;
//     }
//   }
//   if(count===2){
//   console.log(n+ " is a prime number");
//   }
//   else{
//     console.log(n+ " is not a prime number");
//   }
//   readline.close();

//or
// let n =6;
// let flag =false;
// for(let i=2; i<=n-1; i++){
//     if(n%i==0){
//         flag = true;
//         console.log("No is not prime number");
//         break;
//     }
// }
// if(flag== false)
//     console.log("No is not prime numbner");
// function 
// function is reusable piece of code.
// given two number a and b find the sum of it.
// let a =4;
// let b=7;
// sum =a+b;
// console.log(sum);

// function declaration 
// function sum(// parameter){
//}
//sum(argument)
//print();

//  function print(){
//     console.log("Ajay Pandit");
// }
// print();

function print(username){
    console.log("Hello I am");
    console.log(username);
}
print("Ajay");
 function print(name , age){
    console.log("My name is", name);
    console.log("My age is", age);
 }
 print("Ajay",21);
 // default parameter 
 function print(name, age=20){
    console.log(name);
    console.log(age);
 }
print("ajay");

// create a function isEligible and return true if  the
// age is greater than 18 otherwise false
let age =21;
function isEligible(){
    if(age>18)
        return true;
    else
        return false;
}
console.log(isEligible());
let ans = isEligible(30);
console.log(ans);
// create a function factorial of the given number  from the function
function fact(n){
    let prod=1;
    for(let i =1; i<=n; i++){
    prod*=i;
    }
    return prod;
}
console.log(fact(5));
// create a function  print even and print all the even the from 1 to n

// function EvenNumber(n){
//     for(let i =1; i<=n; i++){
//         if(i%2===0){
//             console.log(i);
//         }
//     }
// }
// EvenNumber(50);
 
// function printEven(n){
//     for(let i =1; i<=n; i++){
//         if(i%2==0)
//             console.log(i);
// }
// print(10);


// create a function primeSum and that should 
// the sum of the prime  number in between 1 to n.
// return true if number is prime e;se false.

let n =15;
function isPrime(i){
for(let i =2; i<n; i++)
    if(isPrime(i)){
        return true;
    }
        else{
         return false;
        }
    }




// function PrimeSum(n){
//     let sum=0;
// for(let i=2; i<n; i++){
//      if(isPrime(i)){
//          sum+=i;
//                  }
//          }
//          return sum;
// }
// console.log(primeSum(10));
