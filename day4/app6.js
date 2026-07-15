console.log(!false); //true
console.log(!true); // false
console.log(!{}); //false
console.log(!1); //false
console.log(!(2 && 3)); //false
console.log({} && ![]); //false
console.log(2 && 3 || 4); //3
// short circuit = when a expression contain logical operator like &&, || then we stop evaluation
// expression once result is known. 
let ans = 2 && 0 && 3 && 4;
console.log(ans); // 0
let answer = 2 || 0 || 3 && 4;
console.log(answer); // 2
// conditional statement (if else statement)
//question given a age variable if age is greater than 18 then print eligible and not eligible.
let age = 21;
if (age > 18){
    console.log("eligible");
}
else{
    console.log("Noteligible");
}
// given a variable
let n =67637;
if (n % 2 == 0){
    console.log("even");
}
else{
    console.log("odd");
}
// given a number if it is -tive print -tive number anf if +tive number print +tive and if it is zero print zero.
let a =-6;
if (a > 1){
    console.log("positive");
}
if(a < 1){
    console.log("negative");
}
if(a==0){
    console.log("zero");
}
// given marks of the student 
let marks = 85;
if (marks>90){
    console.log("A+");
}
else if(80<=marks && marks<90) {
console.log("A");
}
else if(70<=marks && marks<80){
    console.log("B+");
}
else if(60<=marks && marks<70){
    console.log("B");
}
else{
    console.log("fail");
}
//given a variable day having value from 1 to 7 and show the name of the day
let day = 5;
if (day ==1){
    console.log("Monday");
}if (day ==2){
    console.log("Tuesday");
}
else if (day ==3){
    console.log("Wednesday");
}
else if (day ==4){
    console.log("Thrusday");
}
else if (day ==5){
      console.log("Friday");
}
else if (day ==6){
    console.log("Saturday");
}
else  {
    console.log("Sunday");
}
// nested if
//if a person is only eligible to drive if he is greater than 18 year old and having valid driving license
// so print elgible  otherwise not eligible
let  age1 =  22;
let dl = true;
if (age1>18 ){
    if (dl==true){
    console.log("eligible");
}else{
    console.log("not eligible");
}
}
else {
    console.log("not eligible");
}
//allroach 2
if(age>18 && dl==true){
    console.log("eligible");
}
else{
    console.log("not eligible");
}

let c = 0;
let d = 5;
if(c && d){
    console.log("works");
}
else{
    console.log("not works");
}
let x = 0;
let y = 5;
if(x || y){
    console.log("works");
}
else{
    console.log("not works");
}
let mark =3;
if({ } && ![] && "check" && marks){
    console.log("marks btw 2 and 5");
}
else{
    console.log("marks not btw 2 and 5");
}

// 12 months
//month 1-> jan
//month 2-> feb
let month = 5;
if (month ==1){
    console.log("jan");
}if (month ==2){
    console.log("feb");
}
else if (month ==3){
    console.log("Mar");
}
else if (month ==4){
    console.log("April");
}
else if (month ==5){
      console.log("May");
}
else if (month ==6){
    console.log("June");
}
else if (month ==7){
    console.log("July");
}
else if (month ==8){
    console.log("Aug");
}
else if (month ==9){
    console.log("Sept");
}
else if (month ==10){
    console.log("Oct");
}
else if (month ==11){
    console.log("Nov");
}
else  {
    console.log("Dec");
}