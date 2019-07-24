/* Silly but describe the difference between operator and an unary operator add an example of it */

    /* La diferencua entre un operador y un operador unario es que el operador uniario solo necesita 
    un operando para realizar la operación.*/

// Assignment operators

/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */
for(let i = 1 ; i <= 15 ; i++){
    console.log(i * 2);
}

/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
let res = 1;
for(let i = 1 ; i <= 15 ; i++){
    res *=2;
    console.log(res);
}

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
for(let i =0, j =9 ; i < 10 ; i++, j--){
    console.log( i+ " " + j + " " + i + " " + j + "\n" );
}

/* expected 
0 9 0 9
1 8 1 8
2 7 2 7
3 6 3 6
4 5 4 5
5 4 5 4
6 3 6 3
7 2 7 2
8 1 8 1
9 0 9 0
*/ 


/* list all the js falsy values */
/*
 (false)
 (null)
 (undefined)
 (0)
 (NaN)
 ('')
 ("")
 (document.all) [1]
 */


 
/* Draw a diagonal in the matrix use while and the comparison operators */
/* Initial */ let matrix = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
];
/* Expected  let matrix = [
    [1,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,0,0,5,0,0,0,0],
    [0,0,0,0,0,6,0,0,0],
    [0,0,0,0,0,0,7,0,0],
    [0,0,0,0,0,0,0,8,0],
    [0,0,0,0,0,0,0,0,9]
]
*/

var a = 0;
var b = 0;
while(a < 9){
    while(b < 9){
        if(a != b ){
            matrix[a][b] = 0;
        }
        b++;
    }
    a++;
    b=0;
}
console.log(matrix);

/* Divide 3 numbers by 0 */

console.log(3/0);
console.log(Infinity/0);
console.log(19/0);

/* use delete to remove the diagonal from the matrix */
var a = 0;
var b = 0;
while(a < 9){
    while(b < 9){
        
        }
        b++;
    }
    a++;
    b=0;
}
console.log(matrix);


/* after delete Use in to check if the following index are present in the inner arrays */
/* check here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators */

/* -- row 0, check index 0 */
/* -- row 1, check index 1 */
/* -- row 2, check index 2 */
/* -- row 3, check index 3 */
/* -- row 4, check index 4 */
/* -- row 5, check index 5 */
/* -- row 6, check index 6 */
/* -- row 7, check index 7 */
/* -- row 8, check index 8 */


console.log(0 in matrix[0]);
console.log(1 in matrix[1]);
console.log(3 in matrix[3]);
console.log(4 in matrix[4]);
console.log(5 in matrix[5]);
console.log(6 in matrix[6]);
console.log(7 in matrix[7]);
console.log(8 in matrix[8]);

/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */
for (let i = 0; i <= 100; i++) {
if(i % 5 >= 2 && i % 5 <= 4) console.log(i);
}

