/* Silly but describe the difference between operator and an unary operator add an example of it */
/**
 * A regular operator requires at least 2 operands, while a unary operator can work on a single operand
 */

// Assignment operators
/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */
for (let i = 1; i <= 15; i++) {
  console.log(i * 2);
}

/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
let result = 1;
for (let i = 1; i <= 15; i++) {
  result *= 2
  console.log(result);
}

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
for (let i = 0, j = 9; i < 10; i++, j--) {
  console.log(`${i} ${j} ${i} ${j}`);
}
// /* expected */
// 0 9 0 9
// 1 8 1 8
// 2 7 2 7
// 3 6 3 6
// 4 5 4 5
// 5 4 5 4
// 6 3 6 3
// 7 2 7 2
// 8 1 8 1
// 9 0 9 0

/*  */

// Comparison operators

/* list all the js falsy values */
const falsy = [0, '', "", false, null, undefined, NaN];

/* Draw a diagonal in the matrix use while and the comparison operators */
/* Initial */
let matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

let row = 0;
let column = 0;
while (row < 9) {
  while (column < 9) {
    if (row !== column) {
      matrix[row][column] = 0;
    }
    column++;
  }
  column = 0;
  row++;
}
console.log(matrix);
/* Expected */
// let matrix = [
//   [1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 2, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 3, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 4, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 5, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 6, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 7, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 8, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 9]
// ]

// Arithmetic operators

/* Divide 3 numbers by 0 */
let divideByZero1 = 42 / 0;
let divideByZero2 = Infinity / 0;
let divideByZero3 = Number.EPSILON / 0;
console.log(divideByZero1, divideByZero2, divideByZero3);

// Relational operators
/* use delete to remove the diagonal from the matrix */
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (i === j) {
      delete matrix[i][j];
    }
  }
}
console.log(matrix);

/* Expected */
// let matrix = [
//   [1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 2, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 3, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 4, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 5, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 6, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 7, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 8, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 9]
// ]

/* after delete Use in to check if the following index are present in the inner arrays */
/* check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators */

/* -- row 0, check index 0 */
console.log(0 in matrix[0]);
/* -- row 1, check index 1 */
console.log(1 in matrix[1]);
/* -- row 2, check index 2 */
console.log(2 in matrix[2]);
/* -- row 3, check index 3 */
console.log(3 in matrix[3]);
/* -- row 4, check index 4 */
console.log(4 in matrix[4]);
/* -- row 5, check index 5 */
console.log(5 in matrix[5]);
/* -- row 6, check index 6 */
console.log(6 in matrix[6]);
/* -- row 7, check index 7 */
console.log(7 in matrix[7]);
/* -- row 8, check index 8 */
console.log(8 in matrix[8]);

// miscellanea
/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */
console.log('********* Miscellanea *********');
for (let i = 0; i < 100; i++) {
  if (i % 5 >= 2 && i % 5 < 4) {
    console.log(i);
  }
}