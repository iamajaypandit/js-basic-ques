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
let person = {
    name: "abhishek",
    city: "delhi",
   age: 10,
}
// approach 1 = this is not valid for all because this falsy
// let check = "name";
//     if(person[check]){
//         console.log("key exists");
//     }
//     else{
//         console.log("key does not exist");
//     }

// aproach 2
function haskey(){
    for(let key in person){
        if(key == check){
            console.log("key exists in the object");
            return;
        }
    }
 console.log("key does not exists");
}

// aproach 3 using  in 
console.log(check in person); // true
console.log("name" in person); //true
// approach 4 using hasOwn
console.log(Object.hasOwn(person,check));

// approach 5
