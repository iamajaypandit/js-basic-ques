//let obj ={
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



    