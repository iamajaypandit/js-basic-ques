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
 let n= 1002;
 let count=0;
 while(n>0 ){
    let last_digit=n%10;
    count++;
    n=Math.floor(n/10);
 }
 console.log(count);
