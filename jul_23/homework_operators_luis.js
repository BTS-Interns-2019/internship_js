/* Silly but describe the difference between operator and an unary operator add an example of it */
//Un operador son todos los que realizan una funcion en base a los operandos que recibe, 
// operador unario es especificamente el que recibe un solo operando (!)

// Assignment operators
//Son los operadores que pueden cambiar el valor de una variable (= += -= *= /=)

/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */
function tabla2(){
    let t = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    for(let i=0;i<=14;i++){
        t[i]*=2;
    }
    return t;
}
console.log(tabla2());
/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
function bin(){
    let t = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    for(let i=0;i<16;i++){
     t[i]**=2;
    }
    return t;
}
console.log(bin());

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
for(let nb=0,ng=9;nb<=9;nb++){
    console.log(nb +" "+ng+" "+ nb+" "+ ng);
    ng--;
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
9 0 9 0*/

/*  */

// Comparison operators

/* list all the js falsy values 

    false
    0
    empty string
    null
    undefined
    NaN

*/

/* Draw a diagonal in the matrix use while and the comparison operators */
/* Initial */  matrix = [
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

    let nfila = 0;
    while(nfila<9){
        let fila = matrix[nfila];
        let ncol = 0;
        while(ncol<9){
            if(ncol!=nfila){
                fila[ncol]=0;
            }
            ncol++;
        }
        matrix[nfila] =fila;
        nfila++;
    }
console.log(matrix);
/* Expected */  matrix = [
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
console.log(1/0);
console.log(2/0);
console.log(3/0);

// Relational operators
/* use delete to remove the diagonal from the matrix */

/* Expected */  matrix = [
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
for(let i=0;i<9;i++){
    let fila = matrix[i];
    delete fila[i];
    matrix[i]=fila;
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

for(let i=0;i<matrix.length;i++){
    let fila = matrix[i];
console.log(i in fila);
 }


// miscellanea

/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */
for(let i=0;i<=100;i++){
    if(i%5>=2&&i%5<4){
        console.log(i);
    }
}