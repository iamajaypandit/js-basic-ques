// fromcharCode()
// console.log('A',fromcharCode()); //65

// ////charCodeAt()
// console.log(String.fromCharCode(65)); //A
// console.log(String.fromCharCode(98)); // 

// print the alphabet from b to f
// bcdef
// let start = 98;
// let end = 103;
// let str = "";
// for(let i =98; i<103; i++){
//     str+=String.fromCharCode(i);
// }
// console.log(str); // bcdef
// from thje character in reverse order
// // from G to A
// let end = 65;
// let start =71;
// let str = "";
// for(let i =71; i>65; i--){
//     str+=String.fromCharCode(i);
// }
// console.log(str); //GFEDCB
//reverse the words 

// // approach 2
// let str = "tiger is running";
// let rev ="";
// for(let i=str.length-1; i>=0; i--){
//     rev+=str[i];
// }
// console.log(rev);
// //approach 3
// let res = str.split('');
// console.log(res.reverse().join(""));
// console.log(str.split('').reverse().join(""));

// let str = "tiger is running";
// let words = str.split(" ");
// let reverseWords = words.reverse();
// let reverseStr = reverseWords.join(" ");
// console.log(reverseStr);

// let str = "tiger is running";
// let words = str.split(" ");
// for(let i =0; i<words.length; i++){
//     words[i]=words[i].split("").reverse().join("");
// }
// console.log(words.join(" "));


//Objects

let chair = {
    type: "office chair",
    price: "5000",
    color: "grey",
    manufacturer: "comfort chair",
    legs: "4 legs",
}
console.log(chair);

//student 
//methods inside obj
let student ={
    name: "ajay",
    batch:"10obp",
    printName(){
        console.log("student name is",student.name);
    }
}

//accessing key
//dot notation
console.log(student.name);// ajay
//batch
console.log(student.batch);
student.printName();

//Bract notation
console.log(student["name"]); // ajay
console.log(student[batch]);// 10obp
student["printName"](); //function invocation using bracket notation

// when key is gien as a variable 
let person = {
    person1: "abhi",
    person2: "ajay",
    person3 = "kundan"
}
let p = "person1";
//console.log(person.p);// wrong
//console.log(person["p"]);//wrong
console.log(person[p]);// abhi

// if person is greater than 19
//print eligible otherwise person is not eligible
let person ={
    name: "abhishek",
    age:10
}

// if(age>18){
//     console.log("person is eligible");
// }
// else{
//     console.log("person is not eligible");
// }
//or
console.log(person.age>18?"eligible":"not eligible");

// create a function inside obj and if age is greater than 18print eligible 
//otherwise not eligibale

let person ={
    name: "ajay",
    age:18,
    isEligible(){
        console.log(person.age>18?"eligible":"not eligible");
    }
}
person.isEligible();

