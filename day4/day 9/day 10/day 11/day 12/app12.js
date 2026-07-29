//Scope
// global scope
// variable that is declared outside of the function or block can be accessed anywhere in the program,
// and this is known as global scope.
let a =20;
function check(){
    console.log("inside function",a);
}
check();
{
    console.log("inside block",a);
}
//
let b =30;
function modify(){
    b=50;
    console.log("inside function",b); // 30
 }
  console.log("global function",b); //50
  modify();

  //ways to declare variables in javascript
  // var 
  //let 
  //const

  //declare variable with var keyword
  var c =20;
  console.log(c); //20
  //declare variable with const keyword
  const c =20;
  console.log(c); //20
  //scope
  //global scope
  //function scope
  //block scope

  function sum(){
    let a=20,b=30;
    console.log(a,b);
  }
  sum();
  //var and const is also a function
  //scope chain 
  //in the scope chain is the process of checking vaiable declaration 
  // from its scope to outer scope one by one.
  // it checks 1st current scope then parent  scope then global scope.
  let a = 20;
  function check(){
    function validate(){
        console.log(a); //20
    }
    validate();
  }
  check();
  //OR

let a = 30;
  function check(){
    function validate(){
        console.log(a); //30
    }
    validate();
  }
  check();

  //variable shadowing 
  // note - variable declare with let can naot be redeclared
//   let a=29;
//   let a = 60;
//   console.log(a);
    
//variable shadowing 
// variable declared with the same name in the smaller
// scope shadow the variable declared in bigger scope.
//     let a =20;
//    {
//     let a =30; 
//     console.log(a); //30
//    }
//    console.log(a); //20
//   {
//     var a =20;
//    {
//     var a =30; 
//     console.log(a); //30
//    }
//    console.log(a); //30
//  }
 //Hoisting->
 //hoisting is the process of processing declaration before the execution.
 //var is hoisted 
//  console.log(a);//undefined 
//  var a=20;
//  var b =20;
//  console.log(b);//20
//  // let is hoisted 
//  //var that is declred with let can not be declared before declaration 
//  console.log(a);
//  let a = 20;
