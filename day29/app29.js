// function sortHalfAscHalfDesc(arr) {
//     const mid = Math.floor(arr.length/2);
//     const firstHalf = arr.slice(0, mid).sort((a,b) => a - b);
//     const secondHalf = arr.slice(mid).sort((a,b) => b - a);
//     return firstHalf.concat(secondHalf);
// }
// const numbers = [5,6,8,3,4,2,0,1,7,9];
// const result = sortHalfAscHalfDesc(numbers);
// console.log("Original Array:", numbers);
// console.log("Output Array:", result);

// Approach 2
// ascending an ddscending order for even odd numbers in the array
let arr = [5,3,2,4,7,6,9,8,10,1];
let even = [];
let odd = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2!==0){
        odd.push(arr[i]);
    }else{
        even.push(arr[i]);
    }
}
odd.sort((a,b)=>b - a);
even.sort((a,b) => a -b);
let result = odd.concat(even);
console.log(result);

// prime and non prime ascending and descending 
let arr = [5,3,2,4,7,6,9,8,10,1];
let prime = [];
let nonPrime = [];
function isPrime(num) {
    if(num <= 1) return false;
    for(let i =2; i <= Math.sqrt(num); i++) {
     if (num % i ===0) return false;
    }
    return true;
}
for(let i = 0; i < arr.length; i++){
    if(isPrime(arr[i])){
        prime.push(arr[i]);
    }else{
        nonPrime.push(arr[i]);
    }
}
prime.sort((a,b) => a - b);
nonPrime.sort((a,b) => a - b);
console.log("Prime Numbers:", prime);
console.log("Non-Prime Numbers:", nonPrime);

