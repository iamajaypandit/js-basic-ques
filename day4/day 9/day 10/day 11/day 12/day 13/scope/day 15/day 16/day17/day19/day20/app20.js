// Substringwith(subString,position) - returns true if the substring is found at the 
//  specified position in the string, otherwise returns false
// let str = "Hello World";
// console.log(str.substring(0, 5));

// let str = "check";
// console.log(str.substring(-3,-1));   // Output: ec

// given a str count no of substrings starts with ec
//let str = "ecoecaec";
//console.log(str.split("ec").length - 1); // Output: 3
// let count = 0;
// for(let i =0; i<str.length; i++){
//     if(str.startsWith("ec", i)){
//         count++;
//     }
// }
// console.log(count); // Output: 3

// endswith() - returns true if a string ends with a specified value, otherwise false.
//let str1 = "Hello World";
//
// console.log(str1.endsWith('d')); // Output: true

//given a filename with extension check if it is a pdf format or not
// let filename = "document.pdf";
// if(filename.endsWith(".pdf")){
//     console.log("The file is a PDF.");
// }

//let str = "checking";
//console.log(str.endsWith("eck",5)); // Output: true

// slice and substring are similar but slice can take negative index and substring cannot take negative index
//default end -> If not specified, it extracts till the end of the string.
//default stat -> If not specified, it extracts from the beginning of the string.
// let str ="Validate";
// console.log(str.slice(3)); // Output: idate
// console.log(str.slice(-3)); // Output: ate
// find the all substrings of length  2
 
// let str = "Validate";
// let count = 0;
// for(let i = 0; i<str.length-1; i++){
//     count++;
//     console.log(str.slice(i,i+2));
// }
// console.log("Total substrings of length 2:", count);

// substring 
// let str = "Validate";
// console.log(str.substring(0,2)); // Output: Va
// console.log(str.substring(-3)); // Output: Validate
// slice = supports negative index
// substring = does not support negative index
// slice(start, end) - extracts a section of a string and returns it as a new string,
// without modifying the original string.
//slice =start>end => empty string
//substring = start>end => empty string


// capitalize the first letter of each word in a string
//let str = "ajay";
//console.log(str.charAt(0).toUpperCase() + str.slice(1)); // Output: Ajay
//console.log(str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()); // Output: Ajay
// convert the middle character in uppercase
// let str ="check";
// let mid = Math.floor(str.length/2);
// console.log(str.slice(0,mid)+str.charAt(mid).toUpperCase()+str.slice(mid+1)); 

//  convert the middle character in uppercase of even length string


// incse of even length string
// convert first middle in to the uppercase
// and incase of odd length string convert the middle character into uppercase

let str = "ajay";
let mid = (str.length%2==0)?Math.floor(str.length/2-1):Math.floor(str.length/2); 
//console.log(str.slice(0,mid-1)+str.charAt(mid-1).toUpperCase()+str.charAt(mid).toUpperCase()+str.slice(mid+1)); // Output: ajAY
console.log(str.slice(0,mid)+str[mid].toUpperCase()+str.slice(mid+1));