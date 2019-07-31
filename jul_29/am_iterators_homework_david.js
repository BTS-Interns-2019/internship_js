str = "Hi Every body!";

str = str.replace(/[0-9`´~¡!@#$%^&*()_|+\-=¿?;:'",.<>\{\}\[\]\\\/]/gi,''); 
str = str.toLowerCase();
console.log(str);

array = str.match(/[a-z]/g);
console.log(array);

obj = new Object();
array.forEach(f);
console.log(obj);

function f(e) {
   
}

// array = array.filter(filtro);    
// function filtro(e) {
//     return e>='a' && e<='z'; 
// }
// console.log(array);

// function charCounter () {
        
// }

// Create a function that receives 1 string as parameter and returns an object indicating how many times a letter was used.
// Each key of the object will be a used letter in lowercase
// Any character that is not a letter must be ignored
// for, while, do...while loops are forbidde

// "Hi Every body!" => {
//     h: 1,
//     i: 1,
//     e: 2,
//     v: 1,
//     r: 1,
//     y: 2,
//     b: 1,
//     o: 1,
//     d: 1,
//   }

// Create a tests file with the same name but ending in .test.js aka am_iterators_homework_<name>.tests.js
// Write at least 3 different test cases for the excersise