// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('', n => {
//   readline.question('', arr => {
//     arr = arr.split(' ').map(Number);
//     let ans = ArrayProblem6(n, arr);
//     console.log(ans);
//     readline.close();
//   });
// });

// function ArrayProblem6(n, arr) {
//  let lastEven = -1;
//  let minimum = Infinity;
//  for(let i = 0; i < n; i++){
//     if (arr[i] % 2 === 0) {
//     if (lastEven !== -1) {
// //         minimum = Math.min(minimum, i - lastEven);
// //     }
// //     lastEven = i;
// //   }
// //  } 
// //  return minimum === Infinity ? -1 : minimum;
// // }


// // check palindrome 
// // let str = "rar";
// // let newStr = [];
// // for(let i = 0; i < str.length; i++){
// //      newStr.push(str[i]);
// // }
// // let isPalindrome = true;
// // for(let i = 0; i < str.length; i++){
// //   if(str[i] != newStr[i]){
// //     isPalindrome = false;
// //     break;
// //   }
// // }
// // console.log(isPalindrome);

// // check palindrome using reverse method
// // let str = "rar";
// // let newStr = str.split('').reverse().join('');  
// // console.log(str === newStr);

// // for of
// let str = "hello";
// for (let char of str) {
//   console.log(char);
// }

// // escape character and escape sequence
// let escapedStr = "Hello, World!\nHow are you?"; 
// console.log(escapedStr); // Output: Hello, World!
// // Output: How are you?

// // string literals 
// let templateStr = `Hello, ${str}!`; // Output: Hello, hello!
// console.log(templateStr);

// console.log('"Hello"'); // Output: "Hello"
// console.log('\'Hello\''); // Output: 'Hello'    
// console.log('Hello\\World'); // Output: Hello\World
// console.log("Hello\tWorld"); // Output: Hello    World  
// //console.log("He'l"l'o"); // Output: He'l"l'o
// console.log('He\'l\"\'o'); // Output: He'l"o

// //escapesequnce
// // it is backslash followed by characters 
// // \n - new line
// // \t - tab
// // \b - backspace
// // \r - carriage return
// console.log("Hello\nWorld"); // Output: Hello
// // Output: World
// console.log("Hello\tWorld"); // Output: Hello    World
// console.log("Hello\bWorld"); // Output: HelloWorld
// console.log("Hello\rCheck"); // Output: Check
// // store  a multiline string 
// console.log("Hello\nAjay"); // Output: Hello
// // Output: Ajay

// // String Searching and Manipulation
// // indexof() - returns the index of the first occurrence of a specified value in a string.
// // If the value is not found, it returns -1.

// let str = "Hello, World!";
// console.log(str.indexOf("World")); // Output: 7
// console.log(str.indexOf("JavaScript")); // Output: -1

// let str = "check";
// console.log(str.indexOf('e')); // Output: 2

// let str = "Hello  World";
// console.log(str.indexOf(" ")); // Output: 5

// // lastindexof() - returns the index of the last occurrence of a specified value in a string.
// let str = "Hello World";
// console.log(str.lastIndexOf('o')); // Output: 7

// //includes() - returns true if a string contains a specified value, otherwise false.
// let str = "Hello World";
// console.log(str.includes('d')); // Output: true


// //startsWith(matchSequence, position) - returns true if a string starts with a specified value, otherwise false.
// let str = "Hello World";
// console.log(str.startsWith('H')); // Output: true

// //endsWith(matchSequence, position) - returns true if a string ends with a specified value, otherwise false.
// let str = "Hello World";
// console.log(str.endsWith('d')); // Output: true
// // slice(start, end) - extracts a section of a string and returns it as a new string, 
// // without modifying the original string.
// // default end -> If not specified, it extracts till the end of the string.
// // If negative, it is treated as str.length + endIndex.
// // If start is greater than end, it returns an empty string.
// // If start is equal to end, it returns an empty string.
// // If start is less than 0, it is treated as str.length + startIndex.
// // If end is less than 0, it is treated as str.length + endIndex.
// let str = "Hello World";
// console.log(str.slice(0, 4)); // Output: Hell

// //substring(start, end) - returns the part of the string between the start and end indexes, or to the end of the string.
// let str = "Hello";
// console.log(str.substring(0, 4)); // Output: Hell
// console.log(str.substring(-2)); // Output: lo

// let str ="check";
// console.log(str.substring(-3,-1));   // Output: ec

// let str = "check";
// console.log(str.substring(2,1)); // start can not be greater than end so it will swap the values 
// // and return the substring from index 1 to 2, which is "h".

// //touppercase() - returns the calling string value converted to uppercase.
// let str = "Hello World";
// console.log(str.toUpperCase()); // Output: HELLO WORLD

// //tolowercase() - returns the calling string value converted to lowercase.
// let str = "Hello World";
// console.log(str.toLowerCase()); // Output: hello world
// // ajay 
// //convert first character 
// to uppercase and rest to lowercase
let str = "ajay";
console.log(str.charAt(0)); // Output: a
console.log(str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()); // Output: Ajay
let newStr = str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
console.log(newStr); // Output: Ajay
