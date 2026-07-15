// 12 months
//month 1-> jan
//month 2-> feb
let month = 5;
if (month ==1){
    console.log("jan");
}
else if (month ==2){
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
//Swtch Condition and Ternary

let day =1;
switch(day){
    case 1:
        console.log("jan");
        break;
        case 2:
            console.log("feb");
            break;
        case 3:
            console.log("march");
            break;
        case 4:
            console.log("april");
            break;
        case 5:
            console.log("may");
            break;
        case 6:
            console.log("june");
            break;
        case 7:
            console.log("july");
            break;
        case 8:
            console.log("aug");
            break;
            case 9:
            console.log("sept");
            break;
            case 10:
            console.log("oct");
            break;
            case 11:
            console.log("nov");
            break;
            case 12:
            console.log("dec");
            break;
        default:
            console.log("not valid month");
        }
// dedisclaimer =  dont't use switch conditions without break keyword

//task 1:-
// if no is 1 or 2 then print no is either 1 or 2
// if no is 2 or 3 then print no is either 3 or 4
let num = 1 ;
switch(num){
    case 1:
    console.log("no is either 1 or 2");
    break;
    case 2:
    console.log("no is either 1 or 2");
    break;
    case 3:
    console.log("no is either 3 or 4");
    break;
    case 4:
    console.log("no is either 3 or 4");
    break;
    default:
        console.log("not valid");

}

let dey ="2";
switch(dey){
    case "1":
        console.log("jan");
        break;
case "2":
    console.log("feb");
    break;
case "3":
    console.log("march");
    break;
    default:
        console.log("not valid month");
}
// Ternary Condition
// simplified version if else 
// given age if greater than 18 print eligible otherwise not eligible
let age = 21;
if(age>18){
    console.log("eligible");
}
else{
    console.log("not eligible");
}
let isEligible = age>=18?"Eligible":"Not Eligible";
console.log(isEligible);
// approach 2
console.log(age>=18?"Eligible":"Not Eligible");


// Question check even or odd by using ternary operator
let no = 57;
 console.log(no%2 == 0?"Even":"Odd");

 // Nested Ternary Condition
 // if age is greater than 18 and if person is holding dl then 
 // print eligible to drive
 //otherwise not eligible to drive
 let aje = 21;
 dl = true;
 if(aje>18 && dl === true){
    console.log("can drive");
 }
 else{
    console.log("can not drive");
 }

 let ahe = 17;
 console.log(ahe>18 && dl ===true? "can drive": "can not drive");
// given three variables stroring number compare them and print lagest one
let a = 1, b = 2, c = 3;
if(a>b && a>c){
    console.log("a");
}
else if(b>c && b>a){
    console.log("b");
}
else if(c>a && c>b){
    console.log("c");
}