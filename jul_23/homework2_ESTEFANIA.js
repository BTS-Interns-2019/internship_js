/* Silly but describe the difference between operator and an unary operator add an example of it 

Los operadores permiten manipular el valor de las variables, realizar operaciones matemáticas con sus valores y comparar diferentes variables.
De esta forma, los operadores permiten a los programas realizar cálculos complejos y tomar decisiones lógicas en función de comparaciones y otros tipos de condiciones.
El operador unario SOLO necesita UN operando.*/


// Assignment operators

/* Use the Shorthand operator to return the first 15 numbers of the Times Table of 2 **use the for statement */
console.log("*****TIMES TABLE OF 2*****");
function tableTwo(limit) {
    for(i=1; i<limit; i++) {
        let x = 2
        console.log(x *= i)
    }
}
tableTwo(16)


/* Use the Shorthand operators to return the first 15 numbers of the binary sequence **use the for statement */
console.log("*****BINARY SEQUENCE*****");
function binary(limit) {
    for(i=-1; i<limit; i++) {
        if(i==-1){
            console.log(0)
        } else {
        let x = 2
        console.log(x **= i)
        }
    }
}
binary(14)

/* Use for and comma operator to print 4 lines of numbers from 0 to 9 but in opposite directions */
console.log("*****FOR AND COMMA OPERATOR*****");
function commaOperator(limit) {
    x = 10;
    for(i=0; i<limit; i++) {
    x--
    console.log(i, x, i, x)
}   
}
commaOperator(10)


// Comparison operators

/* list all the js falsy valueif (false)*/
console.log("*****FALSY VALUES IF*****");
var falsyJS = [false, null, undefined, 0, NaN, '""', "``", "''"];
console.log(falsyJS);

/* Draw a diagonal in the matrix use while and the comparison operators */
console.log("*****CREA DIAGONAL EN MATRIX*****");
function creaDiagonal(matrix){
    let x = 0;
    let y = 0;

    while(x < 9){
        while(y < 9){
            if(x!= y){
                matrix[x][y] = 0;
            }
                y++;     
        }
        x++;
        y = 0;
    }
    console.log(matrix);  
}

creaDiagonal([
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
])

// Arithmetic operators
/* Divide 3 numbers by 0 */
console.log("*****DIVIDIR ENTRE 0*****");
function divide(x, y) {
let result= x /= y
console.log(result)
}

divide(25, 0)
divide(100, 0)
divide(500, 0)

// Relational operators
/* use delete to remove the diagonal from the matrix */
console.log("*****ELIMINA DIAGONAL EN MATRIX Y CHECAR INDICES*****");
function deleteDiagonal(matrix) {
    for(let x = 0; x < 9; x++){
        for (let y = 0; y < 9; y++) {
            if(matrix[x][y]!=0){
                delete(matrix[x][y])
            };
    }
}
console.log(matrix)
console.log(x in matrix[x]); /* after delete Use in to check if the following index are present in the inner arrays */
}

deleteDiagonal([
    [1,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,0,0,5,0,0,0,0],
    [0,0,0,0,0,6,0,0,0],
    [0,0,0,0,0,0,7,0,0],
    [0,0,0,0,0,0,0,8,0],
    [0,0,0,0,0,0,0,0,9]
]);

// miscellanea

/* print all the numbers from 0 to 100 that when divided by 5 have a reminder greater or equal to 2 but lesser than 4 */
console.log("*****NUMEROS DE 1 A 100*****");
function printNumbers(limit){
    for(i=0; i < limit; i++) {
        if(i % 5 >= 2 && i % 5 < 4){
            console.log(i)
        } else {

        }
    }
}
printNumbers(101);