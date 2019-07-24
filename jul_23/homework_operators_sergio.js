/* Silly but describe the difference between operator and an unary operator add an example of it */
 
/*
a + b
 -cerveza 
 
 se diferencian al isar 2 valores o solo uno al usarlos

*/

// Assignment operators

/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */
let tablaDelDos1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let res = [];
for (let i = 0; i < 15; i++) {
    
    res[i] = (tablaDelDos1[i] *= 2) 
    
    
    
}    

/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
let tablaDelDos2 = [0,1];
    let j = 1;
    for (let i = 2; i < 17; i++) {
        
        tablaDelDos2[i] = j *= 2;
        
        
        
}
console.log(tablaDelDos2);

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
/* expected */

for(let i = 0, j = 9; i < 10; i++,j--){
    console.log(i,j,i,j);
    

}

/*
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
/*  */

// Comparison operators

/* list all the js falsy values */
//NaN
//undefine
//0
//[]
//""
//null


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

// for (let i = 0; i < matrix.length; i++) {
//     let array = matrix[i];
//     b++;
//     for (let j = 0; j < array.length; j++) {
//         if(array[j] == i+1){
//             continue;
//         }
//         array[j] = 0;
        
//     }
//     console.log(array);
// }
var i = 0;
j = 0;
while (i < matrix.length) {
    var array1 = matrix[i];
    while (j < array1.length) {
        if(array1[j] == i+1){
            j++;
            continue;
        }
        array1[j] = 0;
        j++;
    }
    i++;
    j = 0;
    console.log(array1);
}









/* Expected */ // le puse un |
 let matrix1 = [
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

// Arithmetic operators

/* Divide 3 numbers by 0 */
3 / 0
55 / 0
6 / 0
// Relational operators
/* use delete to remove the diagonal from the matrix */

i = 0;
j = 0;
while (i < matrix.length) {
    var array1 = matrix[i];
    while (j < array1.length) {
        if(array1[j] > 0){
            delete matrix[i][j];
            j++;
            continue;
        }
        array1[j] = 0;
        j++;
    }
    i++;
    j = 0;
    console.log(array1);
}

// for (let i = 0; i < matrix.length; i++) {
//     let array = matrix[i];
//     for (let j = 0; j < array.length; j++) {
//         if( matrix[i][j] > 0){
//             delete matrix[i][j];
//         }
//     }
   // console.log(array);
// }

/* Expected */ let matrix2 = [
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
//array1.value in matrix[i][j]

i = 0;
j = 0;
while (i < matrix1.length) {
    var array1 = matrix1[i];
    while (j < array1.length) {
        if(array1[j] > 0){
            delete matrix1[i][j];
            console.log(matrix1[i][j] in matrix1);

            j++;
            continue;
        }
        array1[j] = 0;
        j++;
    }
    i++;
    j = 0;
    
}


// miscellanea

/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */

for (let index = 0; index < 101; index++) {
    
    if( index % 5 >= 2 && index % 5 < 4 ){
        console.log(index);
        
    }
    
}