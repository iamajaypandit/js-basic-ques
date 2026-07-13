//round off
let num = 5.98;
console.log(Math.round(num));
//ceil
let num1 = 7.89;
console.log(Math.ceil(num1));
//floor()
let num2 = 8.15;
console.log(Math.floor(num2));
//tofixed()
let num3 =  5.8797654656378;
console.log(num3.toFixed(4));
//ParseInt()
let num4 = 4.8787628;
console.log(Number.parseInt(num4, 10));
//ParseFloat()
let num5 = 4.8787628;
console.log(Number.parseFloat(num5, 5));
//ParseFloat()
let num6 = 1.245;
console.log(Number.parseFloat(num6, 5));
//Infinity 
let a = 2/0;
console.log(a); 
// number object 
console.log(Number("1234"));
console.log(Number("123abc"));//NaN
// Max number that can be stored in javascript
console.log(Number.MAX_VALUE);
// Min number that can be stored in javascript
console.log(Number.MIN_VALUE);
let ans = 2*Number.MAX_VALUE;
console.log(ans); //Infinity
//NaN
console.log(isNaN("abc"));
console.log(isNaN(123));
console.log(isNaN(123));
//
//
//let room = 5;
//let capacity = 25;
//maxstudent = 5*25;
//console.log(maxstudent);
// now 120 student is seated , find the occupancy in percentage.
let occupied = 120;
let percentage = (120/125)*100;
console.log(percentage);
//last year 125 students enrolled in a course . this year 15% more students enrolled in the data analytics course compare to last year 
//print the total no of student in da course this year.

let increasedstudent = 15;
let students = 125;
let totalstudents = (125*15/100)+125;
console.log(totalstudents);

//total no of van required to accomodate 39 students if in a van total students 5 can sit.
let capacity = 5;
let student = 39;
console.log(Math.ceil(student/capacity));

//a virus starts with infecting one person.
//and then after every hour a person infect two new person.
// the after 5 hour how many person will be infected.
h = 3;
console.log(3**(h-1));
//let h = 5;
//let totalinfected = 5**(h-1);
//console.log(totalinfected);

//h=1 -> 1
//h=2 -> 2 new person = 3 totalstudent
//h= 3 -> 6 new peson = 9 person 

