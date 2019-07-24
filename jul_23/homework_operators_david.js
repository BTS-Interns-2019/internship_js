// # Homework 23 jul
// ## Using operators

/* Silly but describe the difference between operator and an unary operator add an example of it */

// Assignment operators

/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */
for (let i = 1; i < 16; i++) {
    let x = 2;
    console.log(x*=i);
}
console.log();

/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
for (let i = -1; i < 14; i++) {
    let x = 2;
    if (i == -1) {
        console.log(0);
    } else {
        console.log(x**=i);
    }
}
console.log();

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
let j = 10;
for (let i = 0; i < 10; i++) {
    j--
    console.log(i,j,i,j);
}
console.log();

// Comparison operators

/* list all the js falsy values */
x = [false, 0, '""', "''", "` `", null, undefined, NaN];
for ( i = 0; i < 8; i++) {
    console.log(x[i]);
}
console.log();

/* Draw a diagonal in the matrix use while and the comparison operators */
var x =[];
for (i = 0; i < 9; i++) {
    for (j = 1; j < 9; j++) {
        x[i] = new Array(1,2,3,4,5,6,7,8,9);
    }
}
console.log(x);
console.log();

// i = 0
// while (i < 9) {
//     for (j = i-1; j > -1; j--) {
//         x[i][j] = 0;
//     }
//     for (k = i+1; k < 9; k++) {
//         x[i][k] = 0;
//     }
//     i++;
// }
// console.log(x);
// console.log();

i = 0;
j = 0;
while (i<9) {
    while (j<9) {
        if (i!=j) {
            x[i][j] = 0;
        }
        j++;
    }
    i++;
    j = 0;
}
console.log(x);
console.log();


// Arithmetic operators

/* Divide 3 numbers by 0 */
console.log(0/0);
console.log(1/0);
console.log(2/0);
console.log();


// Relational operators
/* use delete to remove the diagonal from the matrix */

for (i = 0; i < 9; i++) {
    delete x[i][i];
}
console.log(x);
console.log();

/* after delete Use in to check if the following index are present in the inner arrays */
/* check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators */

for (i = 0; i < 9; i++) {
    console.log(i in x[i]);
}

// miscellanea

/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */
for(i = 5; i < 101; i++) {
    x = i%5;
    if(x>=2 && x<4) {
        console.log("El residuo de dividir "+i+" entre 5 es "+x);        
    }
}
