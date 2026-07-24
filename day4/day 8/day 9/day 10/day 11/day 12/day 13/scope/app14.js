// console.log("hello");
// let arr = [1,2,3,4];
// let sum =0;
// for(let i =0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// print the reverse the order 
// let arr = [1,2,3,4,5,6];
// for(let i = arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }
// print array in reverse order using while loop
// let arr = [1,2,3,4,5,6];
// let i = arr.length-1;
// while(n>=0){
//         console.log(arr[i]);
//     i--;
// }
// print the all the index of the array
// let arr = [1, 2, 3,4,5];
// let i =0;
// while(i< arr.length){
//     console.log(i);
//     i++;
// } 
// let arr = [1, 2, 3,4,5];
// for(let index  in arr){
//     console.log(index);
// }

//printing the items of the arrays          //or
// let arr = [1,2,3,4,5];                     //for(let elem of arr){
//  for(let index in arr){                   // console.log(elem);  }                  
// console.log(arr[index]);               
// }

// Update items 
// let arr=[3,4,5,6];
// console.log(arr[2]);
// // updating items 
// arr[2] = 10;
// console.log(arr);
// // inserting a new item in the array
// console.log(arr.push(8));
// console.log(arr);

// // pop
// let arr = [1,2,3,4];
// console.log(arr.pop);



// unshift = insert an item to the array
// let arr = [1,2,3,4];
// console.log(arr.unshift(5));
// console.log(arr);

//shift = remove the firstitem from the array and return it.
// let arr = [1,2,3,4];
// console.log(arr.shift());
// console.log(arr);
// output

// let arr = [2,4,5,6];
// arr.shift();
// arr.unshift(6);
// arr[3]=9;
// arr.push(7);
// console.log(arr);
// // rotate the array
// let arr = [4,5,2,1];
// let K=3;
// for(let i =0; i<K; i++){
//     let last_elem = arr.pop();
//     arr.unshift(last_elem);
// }
// console.log(arr);

// splice
// let arr =[1,2,3,4];
// arr.splice(1,2);
// console.log(arr); // [1,4]

// 2nd example
// let arr= [1,2,3,4,5];
// arr.splice(0,2);
// console.log(arr);

// delete 3  from the array and insertt 10 in the place of 3
let arr =[9,7,3,4,2];
arr.splice(2,1,10);
console.log(arr);//[9,7,10,4,2]

// insert wo items 3 and 4 after 9
let arr = [9,7,3,4,2];
arr.splice(1,0,4,3);
console.log(arr); //[9,4,3,7,3,4]