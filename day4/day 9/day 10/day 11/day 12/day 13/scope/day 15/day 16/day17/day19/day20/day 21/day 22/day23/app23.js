// let person = {
//     name: Ajay,
//     age: 10,
//     printName(){
//         console.log("name of the person is",person.printName)
//     }
// }
// console.log(person.name);
// console.log(person.age);

// let key = "name";
// console.log(person.key); // undefined 
// console.log(person[key]); // ajay

// // Dynamic key 
// let key1= "name";
// let key2 = "age";
// let value1 = "ajay";
// let value2 = "10";

// let person = {
//    name : value1, //ajay
//    age : value2, //10
// }
// console.log(person);
// //{name:'ajay',age:'10'}
// // how to add prop 
// person.gender="male";

// //add prop using [] bracket
// person["city"] = "Pune";
// console.log(person); // {name:'ajay',age:'10','male',city='Pune'}
// let key ="pincode";
// person[key]= "411045";
// console.log(person);
// //{name:'ajay',age:'10','male',city='Pune',pincode=411045}


// // how to update in objects 
// let person = {
//     name: "ajay",
//     age:10,
// }
// person.age=20;
// person["age"] = 20;
// console.log(person);//{name:'ajay',age:'20'}

// //how to delete
// let person = {
//     name: "ajay",
//     age:10,
// }
// delete person.age;
// console.log(person);//{name:'ajay'}
 
// let person = {
//     name: "ajay",
//     city: "Pune",
//     age: 10,
// }
// for(let key in person){
//     console.log(key);
// }
// //op= name//city//age

// //predict the output
// for(let key in person){
//     console.log(value);
// }

// name//city//age

// //print all the values of onjects along with key
 
// let person = {
//     name: "abhishek",
//     city: "delhi",
//     age: 10,
//     gender:"male"
// }
// for(let key in person){
//     console.log(key,person[key]);
// }

// question 
// // count the number of the key in the object 
// let person ={
//     name:"abhishek",
//     age:null,
//     designation:null,
//     salary:25000,
//     city: "Pune"
// }
// let count =0;
// for(let key in person){
//     if(person[key] != null){
//      count++;
//     }
// }
// console.log(count);

// check if a key exist in obj or not
// let person = {
//     name: "abhishek",
//     city: "delhi",
//    age: 10,
// }
// approach 1 = this is not valid for all because this falsy
// let check = "name";
//     if(person[check]){
//         console.log("key exists");
//     }
//     else{
//         console.log("key does not exist");
//     }

// aproach 2
// function haskey(){
//     for(let key in person){
//         if(key == check){
//             console.log("key exists in the object");
//             return;
//         }
//     }
//  console.log("key does not exists");
// }

// aproach 3 using  in 
// console.log(check in person); // true
// console.log("name" in person); //true
// // approach 4 using hasOwn
// console.log(Object.hasOwn(person,check));

// // approach 5
// //delete 
// // delete person.firstName;
// // dynamic key
// let key1 = "firstName";
// let key2 = "lastName";
// let value1 = "Ajay";
// let value2 = "Pandit";

// let obj = {
//     [key1]:value1,
//     [key2]:value2
// }
// console.log(obj); // {firstName: Ajay, lastNmae: Pandit}

// let obj ={
//     person1:"abhishesk",
//     person2:"Yash",
//     person3:"Ajay"
// }// for printing key
//  for(let key in obj){
//     console.log(key);//person1,2,3
//  }
//  // for printing value
//  for(let key in obj){
//     console.log(obj[key]);// abhishek yash ajay
//  }

 // Note1 = internally key of obj os converted to string
 // number can be the key
 // types of key 
//  let obj ={
//     1:"person1",
//     2:"persin2"
//  }
//  console.log(obj);//{ '1': 'person1', '2': 'persin2' }
 //console.log(typesof(obj[1]));

 // expresion can be the key 


//  // obj as key 
//  let key ={};
//  let obj ={
//     [key]:2,
//  }

 // WAP to find all the elements frequncey of the array 
//  let arr = [1,2,3,4,5,5,5,5];
//  let freq ={};
//  for(let i =0; i<arr.length; i++){
//     if(arr[i] in freq == false){
//         freq[arr[i]] = 1;
//     }
//     else{
//         freq[arr[i]]=freq[arr[i]]+1;
//     }
//  }
// console.log(freq); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 4 }

// obj.key(obj) it returns keys of the arr 
// as an arr
// find the no of the keys 
// let obj ={
//     name:"ajay",
//     gender:"male",
//     city:"Lucknow"
// }
// console.log(Object.keys(obj)); //{name,gender,city}
// // let arr=(object.keys(obj));
// // console.log(arr.length);

// // object.values() = returns an array of values 
// let obj ={
//     name:"ajay",
//     gender:"male",
//     city:"Lucknow"
// }
// console.log(Object.values(obj));

// object of object

let person ={
    firstName:"Ajay",
    lastName:"Pandit",
    address:{
        city:"Pune",
        state:"Maharashtra",
        pincode:401045
    }
}; //access
console.log(person.firstName+" "+person.address.city);//Ajay Pune

// update
// update pincode to 410413
 person.address.pincode = 410413
console.log(person);

// delete
// delete person.address.state;
// console.log(person);

// add 
// add houseNo property inside address
//person.address.houseNo = "43"
//console.log(person);



    