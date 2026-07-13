let a;
a = a+5;
console.log(a);
// comparator operator
//(==, ===, !=, !==, <, >, <=, >=)
//(looose equality)
// compare only value
//datatype is compared
// type correction-> when two valuse of different data types are compared
console.log(3==3); //true
//string with number _> string is converted to number 
console.log(3=="3"); //true 
// line 1
console.log(1234 =="1234");

// loine 2
console.log(0=="");
// Boolean with some other type
//boolean converted the number
console.log(true == 1);
console.log(true ==2);
console.log(false==0);
console.log(1=="false");
console.log(1=="true");
console.log(a==a);
console.log("Aj"=="Aj");
console.log(390==390.0);
//Strict equality ===
// it checks data type and value both
console.log("1"===1); //false
console.log(true === 1); //false
console.log( true == true) // true
 //!= loose not equal to 
 //-> only checks value if they are equal then true otherwise false
 //console.log(1!=1); //false
 //console.log(1!=2); //true
 //console.log(true != 0); //true
 //console.log(false != 1); // true

 // !== strict not equal to
 // it chek both datatypes and values both 
 //console.log(1!==2); //true
 //console.log(1!==true); //true
 //console,log("1"==true); //true
 // Question 1
 let ans = 2!=="2";
 console.log(ans); //
 //less than <
 let c=2;
 let b=7;
 //console.log(c<b);
 //console.log(9>13);
 //console.log(5<true);
 //console.log(false>5);
 //console.log(5<"34");
 //greater than or equal to (>=)
 console.log(5>=2);
 console.log(5>=true);
 //falsy type
 //Nan 
 //Null
 //Undefined
 //empty""
 //false
 //0
  
 //console.log(Boolean(0));//false
 //console.log(Boolean(null));//false
 ////console.log(Boolean(Nan));//false
 ////console.log(Boolean(Undefined));//false
 //console.log(Boolean(""));//false
 //console.log(Boolean(False));// false
 //truthy type
  //console.log(Boolean(1)); //true
  //console.log(Boolean(2));//true
  //console.log(Boolean({}));//true
  //logiical operator (&&,||, !);
 // add operator
 //a&&b only true if both a and b is of type true
 // //it will return last truth value and when there is flase value then it will return false valse respectively
 console.log(3 && 8);
 console.log(0&&2);
 console.log([]&&{});
 console.log(6 && 5 && undefined );
 console.log(3 && 7 && 9);
 //0r operator 
 //returns the first truth value and if there is no truth value so it return last false value 
 console.log(2 || 0); //2
 console.log(0 || 2); //2
 console.log(5 || 2);//5 
 console.log(2 || 8);//2
 console.log({} || 0 || false);//{}
 console.log(false || 0 || undefined);//undefined