// object of array

// let school = {
//     name: "D.P.S",
//     location:"R.K Puram Delhi",
//     class:[{
//         class: "9th",
//         student: 40,
//         avgMarks: 50
//     },
//     {
//      class: "10th",
//      student: 50,
//      avgMarks:60
//     }
//]
// };
// library (accio) and book
let library = {
    name:"Shree Kundan Library",
    location: "Pune",
books:[
    {
        name:"Atomic",
        author:"RD Sharma",
        publisher:"pragti"
    },
    {
     name:"Phyics",
     author:"RD Sharma",
     publisher:"PW"
    },
    {
        name:"Maths",
        author:"Rs Aggarwal",
        publisher: "S.Chand"
    }
]
}
// console.log(library);

// // print all the books of library accio with their author
// console.log(library.books);

//  for(let book in library.books){
//   console.log(book.name+"-"+book.author + "(" + book.publisher +")");
// }
// // add pulisher prop to each book 
//  for(let book in library.books){
//     book.publish="Hachette";
 //}
 // print name of all the the books written R.D Sharma 
//  for(let book in library.books){
//     if(book.author == "RD Sharma"){
//         console.log(book.name);
//     }
//  }
//  // count no books in length
//  console.log(library.book.length);

//  // remove all the books from the library written by Rd sharma 
//  for(let book in library.books){
//     if(book.author == "RD Sharma")
//         delete book;
//  }
//  console.log(library);
// using splice method
//  for(let i=library.books.length-1; i>=0; i++){
//     if(library.books[i].author== "RD Sharma"){
//         library.books.splice(i,-1);
              //i--;
//     }
//  }
//  console.log(library);

// using for in loop 
