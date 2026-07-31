//arr.flat
//let arr = [1,2,3,[4,5,[6,7]]];
// console.log(arr.flat(1));//[1,2,3,4,5.[6,7]]
// console.log(arr.flat(2)); //[1,2,3,4,5,6,7]

//string -> sequence of character
// string literal-> ('',"",)
// string is primitve data type
// let str = "Teach";
// console.log(str);
// let str1 = "Teach";
// console.log(str1);
// let str2 = "Teaching";
// console.log(str2);

// accessing characters from the string 
// let str = "Check";
// console.log(str[0]);//c
// console.log(str[2]);//e


// let age = 20;
// let str = `Average age of the class is ${age}`;
// console.log(str);

// question 1
// let marks = 90;
// let str = `My score is ${90}`;
// console.log(str); // My score is 90

// //immutability = can not cahnge
// let arr = [1,2,2,3];
// arr[2] =5;
// console.log(arr);

// let str = "Check";
// str[2] = 't';
// console.log(str);

// string concatination 
// let str = "abc";
// let str2 = "12";
// console.log(str+str2); //abc12

//Type Coertion 
// manual coertion and automatic coertion
//manual =  by yourself
// automatic = one data type is converted to another
// String + Number  = string 
// let a = "123";
// let b = 12;
// console.log(a+b); //12312
// let a = 12;
// let b = '12345';
// console.log(a+b);//1212345

// if you do 
// //String - Number then string is converted to number 
// let c = 123;
// let d = "11";
// console.log(c-d);//112

//string with boolean 
// console.log("abc"+ture);// abctrue
// console.log("abc"-true);//122
// Basic Iteration


// question 1
// reverse a string 

// let str ="check";
// function reverseString(str){
//     let rev ='';
// for(let i=str.length-1; i>=0; i--){
//           rev+=str[i];
//    }
//    return rev;
// }
// console.log(reverseString(str));

// question 2
// split the string in two parts 
str1 = "man";
str2 = "ual";
function equalhalf(str){
    let n = str.length;
    let str1 ="";
    let str2 ="";   
    let firstHalf=(n%2==0)?n/2:2-1;
    let secondHalf = Math.floor(n/2);            
    for(let i =0; i<n/2; i++){
        str1 +=str[i];
    }
    for(let i=n/2;i<n; i++){
        str2 +=str[i];
    }
    // console.log("first part", str1);
    // console.log("second part", str2);
}
