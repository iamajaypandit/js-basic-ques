// Loop
  //print hello world 5 times
  // for loop 
//   for (let i=1; i<= 5;i++){ //initialise , condition, code, update
//     console.log("helloo world");
//   }

//   for(let i=1; i<=5; i++){
//     console.log(i);
//   }
   
//   for(let i=1; i<=10; i++){
//     console.log("*");
//   }

//   //print in the same  line 
//   let str = ""
//   for(let i=1; i<=10; i++){
//     str+="*";
//   }
//   console.log(str);
  //while loop
  //let i =0;
//  while(i<5){
  //  console.log(i);
    // i++;
  //}

  // find the sum of the numbers from 1 to n using for and while loop both where n is 10.
//   let n = 10;
//   let i=1;
//   let sum=0;
//   for(i; i<=n; i++){
//     sum+=i; 
//   }
//   console.log(sum);
//while
// let n =10;
// let i=1;
// let sum=0;
// while(i<=n){
//     sum+=i;
//     i++;
// }
// console.log(sum);

// print all the even number from 1 to 10 using for and while loo.
// for(let i=1; i<=10; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// let i=1;

// while(i<=10){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }
//print 3 table.
// let n =3;
// for( let i=1; i<10+1; i++){
//     console.log(`${n}X${i}=${n*i}`);
// }

// let i=1;
// while(i<=10){
//     console.log(`${n}X${i}=${n*i}`);
//     i++;
// }
// // find the sm of all the digit of a number.
// let n=451;
// let sum=0;
// let temp =0;
// for(n=451; n>0;){
//     temp=n%10;
//     sum+=temp;
//     n=Math.floor(n/10); 
//    }
//    console.log(sum);

//  let sum =0;
//  while(n!=0){
//     let last_digit=n%10;
//     sum+=last_digit;
//     n=Math.floor(n/10);
//  }  
//  console.log(sum);
 //given a number count digit
//  let n= 10021545;
//  let count=0;
//  while(n>0 ){
//     let last_digit=n%10;
//     count++;
//     n=Math.floor(n/10);
//  }
//  console.log(count);
// find the product of the digit 
// let n=12359;
// let prod =1;
// let temp =0;
// for(let n=12359; n>0;){
//    temp=n%10;
//    prod=prod*temp;
//    n=Math.floor(n/10);
// }
// console.log(prod);
// reverse the number 
// let n = 12345185458;
// let rev = "";
// while(n>0){
// let last_digit=n%10;
// // console.log(last_digit);
// rev = rev+ last_digit;
// n=Math.floor(n/10);
// }
// console.log(rev);
// let n=12;
// let i=1;
// let sum=0;
// for(i; i<=n; i++){
// 		if(n%10)
// 		sum+=i;
// 	}
//   console.log(sum);
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let inputs = [];
// readline.question('', day => {
//   inputs.push(Number(day));
//   readline.question('', month => {
//     inputs.push(Number(month));
//     readline.question('', year => {
//       inputs.push(Number(year));
//       readline.close();

//        day = inputs[0];
//        month = inputs[1];
//        year = inputs[2];

//       // TODO: Add logic here to check if the date is valid
//       let daysInMonth=[0,31,29 || 28, 31,30,31,30,31,31,30,31,30,31];
//       console.log(daysInMonth[parseInt(month)]);
//       switch(daysInMonth){
//         case 1:
//         console.log("January");
//         break;
//         case 2:
//         console.log("February");
//         break;
//         case  3:
//         console.log("March");
//         break;
//         case 4:
//         console.log("April");
//         case 5:
//         console.log("May");
//         break;
//         case 6:
//         console.log("June");
//         break;
//         case 7:
//         console.log("July");
//         break;
//         case 8:
//         console.log("August");
//         break;
//         case 9:
//         console.log("September");
//         case 10:
//         console.log("October");
//         break;
//         case 12:
//         console.log("December");
//         default:
//         console.log("not a month");
//       }
//     //  leap year
//     let Y = year;
//     if(Y%400){
//       console.log("leap year");
//     }
//     else if(Y%100){
//       console.log("not a leap year");
//     }
//     else if (Y%4){
//       console.log("leap year");
//     };
//     if(day == month == year){
//       console.log("Valid");
//     }
//     else{
//       console.log("Invalid");
//     }
//   });
// });
// })
//   const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let inputs = [];

// readline.question('', day => {
//   inputs.push(Number(day));
//   readline.question('', month => {
//     inputs.push(Number(month));
//     readline.question('', year => {
//       inputs.push(Number(year));
//       readline.close();

      

      // TODO: Add logic here to check if the date is valid
//       let daysInMonth = false;
//       let i = 1;
//       while(i <= 31){
//         if(day == i){
//           daysInMonth = true;
//         }
//         i++;
//       }

//       let checkMonth = false;
//       let j = 1;
//       while(j <= 12){
//         if(month == j){
//           checkMonth = true
//         }
//         j++;
//       }

//       let checkYear = false;
//       if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//         checkYear = true;
//       }
//       else if(year.length == 4) {
//         checkYear = true;
//       }

//       if(daysInMonth && checkMonth && checkYear){
//         console.log("Valid");
//       }
//       else{
//         console.log("Invalid");
//       }
   
   
  


// let days = 400;
// let remaningDays = 0, years = 0, months = 0, weeks = 0;

// while(days){
//   if(days >= 365){
//     years++;
//     days -= 365;
//   }
//   else if(days >= 30){
//     months++;
//     days -= 30;
//   }
//   else if(days >= 7){
//     weeks++;
//     days -= 7;
//   }
//   else{
//     remaningDays++;
//     days--;
//   }
// }

// console.log("Remaining Days :", remaningDays);
// console.log("Years :", years);
// console.log("Months :", months);
  // check prime number 
let n = 7878;
  let count = 0;
  for(let i=1; i<=n; i++){
    if(n%i==0){
      count++;
    }
  }
  if(count===2){
  console.log(n+ " is a prime number");
  }
  else{
    console.log(n+ " is not a prime number");
  }
  readline.close();