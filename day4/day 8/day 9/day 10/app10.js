//given a number count digit in the number?
//  let n= 10021545;
//  let count=0;
//  while(n>0){
//     let last_digit=n%10;
//     count++;
//     n=Math.floor(n/10);
//  }
//  console.log(count);

 //find the product of the digit 
// let n=12359;
// let prod =1;
// let temp =0;
// for(let n=12359; n>0;){
//    temp=n%10;
//    prod=prod*temp;
//    n=Math.floor(n/10);
// }

//reverse the given  number 
// let n = 12345185458;
// let rev = "";
// while(n>0){
// let last_digit=n%10;
// rev = rev+ last_digit;
// n=Math.floor(n/10);
// }
// console.log(rev);


//break
// for (let i =0; i<=10; i++){
//     console.log(i);
//     if(i==6)
//         break;
// }

// for (let i =0; i<=10; i++){
//     console.log(i);
//         break;
// }
// for (let i =0; i<=5; i++){
//     if(i==2)
//         continue;
//     console.log(i);
// }

// for (let i =0; i<=5; i++){
//     console.log(i);
//     if(i==2)
//         continue;
// }

//print all the numbers 
//from 1 to 10 except  the multiples of 3
// for(let i=1; i<=10; i++){
//     if(i%3===0){
//         continue;
//        }
//     console.log(i);
// }
// do while-> atleast once
// do{
//     //it will excuted
// }while(condition);
// print 1 to 5 using do while loop
// let count =1;
// do{
//  console.log(count);
//  count++;
// } while (count<= 5);

// now print 1 to 50 and skip all 
//the numbers that is even and stop at 35
// let i =1;
// for(let i=1; i<=50; i++){
//     if(i%2==0)
//         continue;
//     if(i==35)
//         break;
//     console.log(i);
// } 

// iterate from  to 30
// and if no is divisible by 3 print for
//and if divisible by 5 print bar
// and if divisible by both 3&5
// print foo and bar 
// let i =1;
// for(i=1; i<=30; i++){
//     console.log(i);
//     if(i%3===0 && i%5===0){
//         console.log("foo&bar");
//     }
//     else if(i%3===0){
//         console.log("foo");
//     }
//     else if(i%5===0){
//         console.log("bar");
//     }
// }
//  for(let i =1; i<=5; i++){
//     if(i==1 && i==2)
//         break;
//     console.log(i);
//  }

//  for(let i =1; i<=5; i++){
//     if(i==1 || i==2)
//         break;
//     console.log(i);
//  }
//  for(let i =1; i<=5; i++){
//     if(i==1 && i==2)
//           console.log(i);
//         break;
//  }
// let n=12;
// let i=1;
// let sum=0;
// for(i; i<=n; i++){
// 		if(n%10)
// 		sum+=i;
// 	}
//   console.log(sum);

  // finf the sum of arrars 
  let arr =[5,8,9,5,4]
  let sum =0;
  for(let i =1; i<arr.lenght-1; i++){
    for( let j=i+1; j<arr.lenght; j++){
      sum+=arr[i]+[j];
    }
    return sum;
  }
