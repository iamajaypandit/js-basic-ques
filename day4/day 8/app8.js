
//switch case 
let marks = 75;
switch(true){
case marks>90:
console.log("A");
break;
case marks>70:
console.log("B");
break;
case marks>=50:
console.log("C");
break;
default:
console.log("fail");
} 
//
// rewrite this code using switch operator
let age = 21, dl = true;
switch(true){
    case age>18 && dl==true:
        console.log("eligible to drive");
        break;
    default:
        console.log("not eligible to drive");
}

// print quarter 1 if months 4<= months <=6
//
//
//
 let months = 5;
 switch(true){
    case 4<= months && months <=6:
        console.log("quarter 1");
        break;
    case 7 <= months && months <=9:
        console.log("quarter 2");
        break;
    case 10<=months && months<=12:
        console.log("quarter 3");
        break;
    case 1 <= months && months<=3:
        console.log("quarter 4");
        break;
        default:
        console.log("invalid");        
 }
 //unary operator 
 // preincrement 
 let c =5;
 ++c;
 console.log(c);
 
 //using post increment 
 let a =10;
 a++;
 console.log(a);
 let b =10;
 b++;
 console.log(b++);//11
 console.log(b); //12
 //post decrement
 let d = 8;
 d--;
 console.log(d++);
 console.log(d);
  let e =5, f = 9;
  console.log(e+++f+f--);

  // Loop
  //print hello world 5 times
  // for loop 
  for (let i=1; i<= 5;i++){ //initialise , condition, code, update
    console.log("helloo world");
  }
