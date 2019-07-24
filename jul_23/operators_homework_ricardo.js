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



