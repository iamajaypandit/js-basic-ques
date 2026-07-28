// slice 
// splice 
// indexOf
// indexOf (searchElement, fromeIndex)
//return the index of the first
// occurence of searchElement in the arrray 
// if not present return -1

// let arr = [1,2,3,4,5];
// console.log(arr.indexOf(2));//1
// let arr =[1,5,9,8,7];
// console.log(arr.indexOf(3)); //-1
// let arr = [5,2,4,4,4,4,4,5];
// console.log(arr.indexOf(5,3));
// practice:-
//given an array and two numbers
// find the number of items bw given two values in the array

// let arr = [1,3,4,6,9,10];
// let a = 4;
// let b = 10;
// let firstindex =-1;
// let secondindex=-1;
// for(let i = 0; i <arr.length; i++){
// for(let i = 0; i <arr.length; i++)
// if(arr[i]==a){
//     firstindex=i;
//     break;
// }
// if(arr[i]==b){
//      secondindex=i
// ;
// break;
// }
// }
// console.log(secondindex=firstindex-1);

//approach 2
// let arr = [1,3,4,6,9,10];
// let a = 4;
// let b = 10;
// let firstIndex = arr.indexOf(a);
// let secondIndex = arr.indexOf(b);
// console.log(secondIndex-firstIndex-1);


//Concat = it is used to to merging two arrays
// and also it return new array of merged items 
// let arr1 = [1,2,3,4];
// let arr2 = [4,5,6,7];
//console.log(arr1.concat(arr2));//[1,2,3,4,5,6,7]
//to add  items it adds items in last 
//console.log(arr.concat(2,3));// [1,2,3,4,4,5,6,7,]

// reverse = reverse the item of an array inplace and rfeturn 
//the refrence of same 
// let arr = [1,2,3,4];
// let = reverse();
// console.log(arr);
// given an array check palindrome

let arr = [1,2,1];
let str = "";
let rev ="";
for(let i= str.length-1; i>=0; i--){
    rev = rev +str[i];
}
if(str===rev){
    console.log("true");
}
else{
    console.log("false");
}
check=[1,2,3];

// array comaparison 