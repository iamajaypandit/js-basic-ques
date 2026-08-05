// replace slice with substring to get the same output'
// let str = "Validate";
// console.log(str.replace('l','e'));
// console.log(str); // Output: Validate

// let str = "Hello world";
// console.log(str.replace("Hello","world")); // Output: world world

//replaceall() - returns a new string with all matches of a pattern replaced by a replacement.
// let str2 = "Hello world, hello universe";   
// console.log(str2.replaceAll("hello", "hi")); // Output: Hello world, hi universe

// let str = "Hello";
// console.log(str.replaceAll("l", "g")); // Output: Heggo


// given a string split the string in to array of words
// let str1 = "this is so much polluted";
// let res = str1.split(" ");
// console.log(res); // output ["this", "is", "so", "much", "polluted"]
// let str1 = "this is so much polluted";
// let res = str1.split(" ");
// for(let i=0; i<res.length; i++){
//     console.log(res[i]);
// }


// //split(separator,limit) - splits a string into an array of substrings, and returns the new array. 
// The split is done at each specified separator.

// let str2 = "check";
// let result = str2.split('', 3); // Output: ["c", "h", "e"]
// console.log(result);

//given a string find the number of spaces in the string
//  let str = "this is so much polluted";
//  let res = str.split("");
 //console.log(res.length - 1); // Output: 4
//  function countSpaces(str) {
//  let count = 0;
//  for(let i = 0; i < str.length; i++){
//      if(str[i] == " "){
//          count++;
//      }
//  }
//  return count;
//  }
//  console.log(countSpaces(str)); // Output: 4

 //print the first two words of the sttring 
//  let str = "this is so much polluted";
//  let words = str.split(" ", 2);
//  console.log(words); // Output: ["this", "is"]

 // reverse the words of the string 
//  let str = "this is so much polluted";
//  let words = str.split(" ");
//  let reversedWords = words.reverse();
//  let reversedStr = reversedWords.join(" ");
//  console.log(reversedStr); 
 
// join  = convert array into string 
// let res= ["Hello","is","this","ajay"];
// console.log(res.join(" ")); // Output: Hello is this ajay

// trim = trim the spaces from begginig and end from the a string 
// let str = "check";
// console.log(str.trim());

// // trimStart() = removes the spaces from start of the string 
// let str = "check";
// console.log(str.trimStart());

// // trimEnd() = removes the spaces from the last 
// let str = "check";
// console.log(structuredClone.trimEnd());

//padStart(targetLength,padstring)= 
// add apd string in the start of the string untill
//it is equal to the target length 
// let str = "check";
// console.log(str.padStart(8,"a"));

//padEnd
let str ="check";
console.log(str.padEnd(9,"a"));

//ASCII = American code for international interchange 
//127
//digit (0-9) = 48-57
//alphabaet(A-Z) = 65-90
//alphabaet(a-z) = 97-122

//charCodeAt()
console.log("A".charCodeAt()); // 65
console.log("g".charCodeAt()); //103 